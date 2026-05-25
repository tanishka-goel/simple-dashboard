import { SimpleBarChart } from "../components/charts/BarGraph";
import { SimpleLineChart } from "../components/charts/LineCharts";
import SimplePieChart from "../components/charts/PieChart";
import StackedBarChart from "../components/charts/StackedBarChart";

export const CHART_COLORS = {
  default: [
    "#2563EB", // blue
    "#3B82F6", // sky blue
    "#4F46E5", // indigo
    "#6366F1", // soft indigo
    "#7C3AED", // violet
    "#8B5CF6", // purple
    "#0EA5E9", // cyan blue
    "#4338CA", // deep indigo
  ],

  pastel: [
    "#DBEAFE", // very light blue
    "#BFDBFE", // pastel blue
    "#93C5FD", // soft sky
    "#C7D2FE", // pastel indigo
    "#A5B4FC", // light indigo
    "#DDD6FE", // pastel violet
    "#C4B5FD", // soft purple
    "#BAE6FD", // pale cyan
  ],

  dark: [
    "#1E3A8A", // navy blue
    "#1D4ED8", // royal blue
    "#1E40AF", // dark blue
    "#312E81", // deep indigo
    "#3730A3", // indigo
    "#4338CA", // strong indigo
    "#5B21B6", // deep violet
    "#6D28D9", // rich purple
  ],
};

export const chartList = ({
  showUsers,
  showProducts,
  getBlooadGroups,
  getbmi,
  userAgeData,
  getCountryStats,
  getGenderRoles,
  productCategoryData,
  getShippingInfo,
  getAveragePrice,
}) => {
  const charts = [];

  if (showUsers)
    charts.push(
      {
        id: 1,
        label: "User Blood Groups",
        element: (
          <SimplePieChart
            colors={CHART_COLORS.pastel}
            label="User Blood Groups"
            data={getBlooadGroups}
          />
        ),
      },

      {
        id: 8,
        label: "Gender x Roles",
        element: (
          <StackedBarChart
            label="Gender x Roles"
            data={getGenderRoles}
            key1="male"
            key2="female"
          />
        ),
      },

      {
        id: 4,
        label: "User Age Groups",
        element: (
          <SimpleLineChart
            label={"User Age Groups"}
            data={userAgeData}
            xlabel={"User Age Groups"}
            ylabel={"No. of Users"}
          />
        ),
      },
      {
        id: 5,
        label: "Users by State",
        element: (
          <SimpleBarChart
            label={"Users by State"}
            data={getCountryStats}
            xlabel={"States"}
            ylabel={"No. of Users"}
            color="#3b68ac"
          />
        ),
      },

      {
        id: 3,
        label: "User BMI Chart",
        element: (
          <SimplePieChart
            colors={CHART_COLORS.default}
            label={"User BMI Chart"}
            data={getbmi}
          />
        ),
      },
    );

  if (showProducts)
    charts.push(
      {
        id: 6,
        label: "Product Shipping Time",
        element: (
          <SimpleBarChart
            label={"Product Shipping Time"}
            data={getShippingInfo}
            xlabel={"Shipping Time"}
            ylabel={"No. of Products"}
            color="#7542cc"
          />
        ),
      },
      {
        id: 2,
        label: "Product Categories",
        element: (
          <SimplePieChart
            colors={CHART_COLORS.dark}
            label={"Product Categories"}
            data={productCategoryData}
          />
        ),
      },

      {
        id: 7,
        label: "Average Product Price per Category",
        element: (
          <SimpleBarChart
            label={"Average Product Price per Category"}
            data={getAveragePrice}
            xlabel={"Product Category"}
            ylabel={"Average Price"}
            color="#2ab2df"
          />
        ),
      },
    );

  return charts;
};
