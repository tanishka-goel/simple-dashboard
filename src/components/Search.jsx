import React, { useContext, useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "../css/pages/dashboard.css"
import { ThemeContext } from "../context/ThemeProvider";

const Search = ({ onSearchChange, placeholder="Search" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 500);
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    onSearchChange(debouncedTerm);
  }, [debouncedTerm, onSearchChange]);

  return (
  <div className={`${theme}`}>
      <input
     
      className="search-input"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
