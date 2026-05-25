import React, { useContext } from "react";
import "../css/layout.css";
import { LogOut, Menu, Moon, Sun, User } from "lucide-react";
import { ThemeContext } from "../context/ThemeProvider";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import { Link } from "react-router-dom";

const Header = ({ onHamburgerClick }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  

  return (
    <div
      style={{
        background: theme === "dark" ? "#070c18" : "#F8F9FA",
        borderBottom: "1px solid gray",
      }}
      className="header"
    >
      <button
        className="hamburger-btn"
        onClick={onHamburgerClick}
        style={{
          background: theme === "light" ? "#e8ebf0" : "#0F172A",
          color: theme === "light" ? "#0F172A" : "#e8ebf0",
        }}
      >
        <Menu size={22} />
      </button>
      <div className="headingss">
        <h1
          className="header-header"
          style={{ color: theme === "dark" ? "#F8F9FA" : "#0F172A" }}
        >
          User and Product Analytics
        </h1>
        <p
          className="subheader"
          style={{ color: theme === "dark" ? "#c2c3c6" : "#737476" }}
        >
          Real-time insights into how your users behave and your products
          perform.
        </p>
      </div>

      <div>
        <button
          onClick={toggleTheme}
          style={{
            background: theme === "light" ? "#e8ebf0" : "#0F172A",
            color: theme === "light" ? "#0F172A" : "#e8ebf0",
          }}
          className="themebtn"
        >
          {theme === "light" ? (
            <Moon
              size={25}
              style={{ stroke: theme === "light" ? "#0F172A" : "#F8F9FA" }}
            />
          ) : (
            <Sun size={25} />
          )}
        </button>

        
      </div>
    </div>
  );
};

export default Header;
