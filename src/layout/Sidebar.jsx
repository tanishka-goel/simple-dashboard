import React, { useContext, useState } from "react";
import "../css/layout.css";
import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  NotebookText,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeProvider";
import { logout } from "../features/authSlice";

const adminpages = [
  { name: "Dashboard", route: "/dashboard", icon: <LayoutDashboard /> },
  { name: "Profile", route: "/me", icon: <User /> },
  { name: "Settings", route: "/settings", icon: <Settings /> },
];

const userpages = [
  { name: "Dashboard", route: "/dashboard", icon: <LayoutDashboard /> },
  { name: "Profile", route: "/me", icon: <User /> },
];

const Sidebar = ({ isCollapsed, onToggle, onMobileClose, isMobile }) => {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const pages = user.role === "admin" ? adminpages : userpages;
  return (
    <div className={`sidebar ${isMobile ? "mobile-open" : ""}`}>
      <h2 className={`sidebar-header ${isMobile ? "mobile-open" : ""}`}>
        {isCollapsed && !isMobile ? "AQ" : "AnalytiQ"}
      </h2>
      <hr />
      <br />

      <div className="sidebar-content">
        {pages.map((p, i) => (
          <NavLink
            key={i}
            to={p.route}
            className={({ isActive }) =>
              isActive ? "active-link nav-link" : "nav-link"
            }
          >
            <div className="sidebar-item">
              <span className="sidebar-icon">{p.icon}</span>
              <span className="sidebar-label">
                {isCollapsed ? "" : <p>{p.name}</p>}
              </span>
            </div>
            <br />
            <hr />
          </NavLink>
        ))}
      </div>

      <div>

        {!isMobile && (
<button className="sidebar-toggle-btn" onClick={onToggle}>
        {isCollapsed  ? <ChevronRight /> : <ChevronLeft />}
      </button>
        )}
 

      <button
        onClick={handleLogout}
        className="sidebar-logout-btn"
       
      >
        <LogOut />
      </button>
      </div>

     
    </div>
  );
};

export default Sidebar;
