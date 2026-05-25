import React, { useContext, useMemo, useState } from "react";
import "../css/reports.css";
import { useUsesrs, useDeleteUsers } from "../queries/users.query";
import Search from "../components/Search";
import Table from "../components/Table";
import { Edit, Trash, Trash2 } from "lucide-react";
import { AddUserModal } from "../components/AddUserModal";
import { ThemeContext } from "../context/ThemeProvider";
import UserCard from "../components/UserCard";
import { usePagination } from "../hooks/usePagination";
import TableSkeleton from "../components/skeletons/TableSkeleton";
import { FilterSkeleton } from "../components/skeletons/FilterSkeleton";
import { useSort } from "../hooks/useSort";

const Settings = () => {
  const { data: users, isLoading: usersLoading } = useUsesrs();
  const { mutate: deleteUser } = useDeleteUsers();
  const [searchTerm, setSearchTerm] = useState("");
  const len = users?.length;
  const [userModal, setUserModal] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleDelete = (row) => {
    deleteUser(row.id);
  };

  const notAdmins = users?.filter((user)=>user?.role!=="admin")

  const filteredUsers = useMemo(() => {
    return notAdmins?.filter((user) => {
      const term = searchTerm.toLowerCase();
      return (
        user?.firstName?.toLowerCase().includes(term) ||
        user?.lastName?.toLowerCase().includes(term) ||
        user?.maidenName?.toLowerCase().includes(term) ||
        user?.address?.city?.toLowerCase().includes(term) ||
        user?.company?.name?.toLowerCase().includes(term)
      );
    });
  }, [searchTerm, users]);

   const { sortedVal, setSortedVal, sortedData } = useSort(filteredUsers)

  const { currpage, totalPages, nextPage, prevPage, currdata, gotoPage } =
    usePagination(sortedData, 10);

  const headers = [
    { key: "id", label: "ID", cell: (row) => `${row?.id}` },
    {
      key: "fullname",
      label: "Full Name",
      cell: (row) =>
        [row?.firstName, row?.lastName, row?.maidenName]
          .filter(Boolean)
          .join(" "),
    },
    { key: "age", label: "Age", cell: (row) => `${row?.age}` },
    { key: "email", label: "Email", cell: (row) => `${row?.email}` },
    { key: "phone", label: "Phone", cell: (row) => `${row?.phone}` },
    {
      key: "address",
      label: "Address City",
      cell: (row) => `${row?.address?.city}`,
    },
    {
      key: "company",
      label: "Company",
      cell: (row) => `${row?.company?.name}`,
    },

    {
      key: "actions",
      label: "Actions",
      cell: (row) => (
        <button className="btn" onClick={() => handleDelete(row)}>
          <Trash2 className="delbtn" size={15} />
        </button>
      ),
    },
  ];

  if (usersLoading) return(
    <div>
      <FilterSkeleton/>
      <TableSkeleton/>
    </div>
  );

  return (
    <div className="user-table">
      <div className={`report-filter-bar ${theme}`}>
        <p style={{ color: "#000", fontSize: "20px" }}>Total Users : {len}</p>
        <div className="rfb2">
          <div className="sort-div">
            <select value={sortedVal} onChange={(e)=>setSortedVal(e.target.value)}>
              <option value="all">All</option>
              <option value="nameatoz">Name: A to Z</option>
              <option value="nameztoa">Name: Z to A</option>
              <option value="ageasc">Age: Low to High</option>
              <option value="agedesc">Age: High to Low</option>
              <option value="cityatoz">City: A to Z</option>
              <option value="cityztoa">City: Z to A</option>
              <option value="companyatoz">Company: A to Z</option>
              <option value="companyztoa">Company: Z to A</option>
            </select>
          </div>
          {/* <div>
            <button className="btn">Cards</button>
            <button className="btn">Table</button>
          </div> */}
          <Search onSearchChange={setSearchTerm} />
          <button className="btn addbtn" onClick={() => setUserModal(true)}>
            Add Users
          </button>
        </div>

        {userModal && <AddUserModal closeModal={() => setUserModal(false)} />}
      </div>

      {/* <div className="user-grid">
{filteredUsers.map((fu) => (
        <UserCard user={fu} />
      ))}
</div>
       */}

       {/* <TableSkeleton/> */}

      <div className="table-div">
        <Table data={currdata} headers={headers} />
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

export default Settings;
