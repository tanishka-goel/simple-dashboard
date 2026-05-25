import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../css/dashboard.css"

const Search = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearchChange(debouncedTerm);
  }, [debouncedTerm, onSearchChange]);

  return (
  <div>
      <input
      className="search-input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
