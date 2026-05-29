import "../css/pages/dashboard.css";
import { useContext, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUsers } from "../queries/users.query";
import { SimpleLineChart } from "../components/charts/LineCharts";
import { SimpleBarChart } from "../components/charts/BarGraph";
import { useProducts } from "../queries/products.query";
import {
  getAveragePriceByCategory,
  getBloodGroups,
  getBMI,
  getGenderByRole,
  getShippingTime,
  getUserByState,
  transformProductsToCategoryData,
  transformUsersByAgeGroup,
} from "../utils/GraphTransforms";
import {
  selectFilters,
  setChartScope,
  setDateRange,
} from "../features/filterSlice";
import Search from "../components/Search";
import { chartList } from "../data/chartData";
import { usePagination } from "../hooks/usePagination";
import { ChartSkeleton } from "../components/skeletons/ChartSkeleton";
import { FilterSkeleton } from "../components/skeletons/FilterSkeleton";
import { ThemeContext } from "../context/ThemeProvider";
import StatCardRow from "../components/StatCardRow";
import StatCardSkeleton from "../components/skeletons/StatCardSkeleton";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { chartScope, dateRange } = useSelector(selectFilters);
  const { data: users, isLoading: userLoading, error: userError } = useUsers();
  const {
    data: products,
    isLoading: productsLoading,
    error: productError,
  } = useProducts();

  const userlen = users?.length;
  const prodlen = products?.length;
  const femlen = users?.filter((user) => user?.gender === "female")?.length;
  const malelen = users?.filter((user) => user?.gender === "male")?.length;

  const showUsers = chartScope !== "products";
  const showProducts = chartScope !== "users";

 

  const filteredUsers = useMemo(() => {
    if (!users ) return [];

    const fromDate = dateRange.from ? new Date(dateRange.from) : null;
    const toDate = dateRange.to ? new Date(dateRange.to) : null;

    return users.filter((user) => {
      if (!fromDate && !toDate) return true;
      if (!user.birthDate) return false;

      const birthDate = new Date(user.birthDate);
      if (fromDate && birthDate < fromDate) return false;
      if (toDate && birthDate > toDate) return false;

      return true;
    });
  }, [users, dateRange.from, dateRange.to]);

  const productCategoryData = useMemo(
    () => transformProductsToCategoryData(products),
    [products],
  );
  const userAgeData = useMemo(
    () => transformUsersByAgeGroup(filteredUsers),
    [filteredUsers],
  );
  const getAveragePrice = useMemo(
    () => getAveragePriceByCategory(products),
    [products],
  );
  const bloodGroups = useMemo(
    () => getBloodGroups(filteredUsers),
    [filteredUsers],
  );
  const getShippingInfo = useMemo(() => getShippingTime(products), [products]);
  const getbmi = useMemo(() => getBMI(filteredUsers), [filteredUsers]);
  const getStateStats = useMemo(
    () => getUserByState(filteredUsers),
    [filteredUsers],
  );
  const getGenderRoles = useMemo(
    () => getGenderByRole(filteredUsers),
    [filteredUsers],
  );
  const [searchTerm, setSearchTerm] = useState("");

  const allCharts = useMemo(
    () =>
      chartList({
        showUsers,
        showProducts,
        bloodGroups,
        getbmi,
        userAgeData,
        getStateStats,
        getGenderRoles,
        productCategoryData,
        getShippingInfo,
        getAveragePrice,
      }),
    [
      showUsers,
      showProducts,
      bloodGroups,
      getbmi,
      userAgeData,
      getStateStats,
      getGenderRoles,
      productCategoryData,
      getShippingInfo,
      getAveragePrice,
    ],
  );

  const filteredCharts = useMemo(() => {
    if (!searchTerm.trim()) return allCharts;

    return allCharts?.filter((ch) =>
      ch.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [allCharts, searchTerm]);

  const { currpage, totalPages, nextPage, prevPage, currdata, gotoPage } =
    usePagination(filteredCharts, 4);

  if (userLoading || productsLoading)
    return (
      <div style={{ padding: "20px" }}>
        <FilterSkeleton />
        <StatCardSkeleton />
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
    );

  if (userError || productError) return <p>Error fetching data..</p>;

  return (
    <div className="main-div">
      <div className={`filter-bar ${theme}`}>
        <div className="all-fields">
          <div className="filter-field">
            <label
              htmlFor="chart-scope"
              style={{ color: theme === "light" ? "#000" : "#F8F9FA" }}
            >
              Charts
            </label>
            <select
              className="sort-fn"
              id="chart-scope"
              value={chartScope}
              onChange={(event) => dispatch(setChartScope(event.target.value))}
            >
              <option value="all">All charts</option>
              <option value="users">User charts</option>
              <option value="products">Product charts</option>
            </select>
          </div>
          <div className="filter-field">
            <label
              style={{ color: theme === "light" ? "#000" : "#fff" }}
              htmlFor="date-from"
            >
              Birth date from
            </label>
            <input
              className="date-field"
              type="date"
              value={dateRange.from}
              onChange={(event) => {
                const value = event.target.value;
                if (dateRange.to && new Date(value) > new Date(dateRange.to)) {
                  toast.warning('"From date" cannot be after "To date"');
                  return;
                }

                dispatch(
                  setDateRange({
                    from: value,
                  }),
                );
              }}
            />
          </div>
          <div className="filter-field">
            <label
              style={{ color: theme === "light" ? "#000" : "#fff" }}
              htmlFor="date-to"
            >
              Birth date to
            </label>
            <input
             id="date-to"
              className="date-field"
              type="date"
              value={dateRange.to}
              onChange={(event) => {
                const value = event.target.value;
                if (
                  dateRange.from &&
                  new Date(value) < new Date(dateRange.from)
                ) {
                  toast.warning('"From date" cannot be after "To date"');

                  return;
                }

                dispatch(
                  setDateRange({
                    to: value,
                  }),
                );
              }}
            />
          </div>

          <div className="filter-field search-field">
            <label
              style={{ color: theme === "light" ? "#000" : "#fff" }}
              htmlFor=""
            >
              Search
            </label>
            <Search
              placeholder="Search by title"
              onSearchChange={setSearchTerm}
            />
          </div>
        </div>
      </div>

      <StatCardRow
        products={prodlen}
        male={malelen}
        female={femlen}
        users={userlen}
      />

      <div className="eight">
        {currdata?.map((chart) => (
          <div key={chart.id} className="hover">
            {chart.element}
          </div>
        ))}
      </div>

      <div className="page-btn">
        <button
          className="buttons"
          disabled={currpage === 1}
          onClick={prevPage}
        >
          Prev
        </button>
        <p>
          {currpage}/{totalPages}
        </p>
        <button
          className="buttons"
          disabled={currpage === totalPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
