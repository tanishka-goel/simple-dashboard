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
import LogoutModal from "../components/modals/LogoutModal";

const adminpages = [
  { name: "Dashboard", route: "/dashboard", icon: <LayoutDashboard /> },
  { name: "Settings", route: "/settings", icon: <Settings /> },
  { name: "Profile", route: "/me", icon: <User /> },
];

const userpages = [
  { name: "Dashboard", route: "/dashboard", icon: <LayoutDashboard /> },
  { name: "Profile", route: "/me", icon: <User /> },
];

const Sidebar = ({ isCollapsed, onToggle, onMobileClose, isMobile }) => {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [openLogoutModal, setOpenLogOutModal] = useState(false)

  const handleLogout = () => {
    dispatch(logout());
  };

  const pages = user?.role === "admin" ? adminpages : userpages;
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
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        )}

        <button onClick={()=>setOpenLogOutModal(true)} className="sidebar-logout-btn">
          <LogOut />
        </button>

        {openLogoutModal && (
          <LogoutModal
          user={user}
          onClose={()=>setOpenLogOutModal(false)}
          onConfirm={handleLogout}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
