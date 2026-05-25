import React, { useContext, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "../css/layout.css"
import { ThemeContext } from "../context/ThemeProvider";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(false)
  const {theme} = useContext(ThemeContext)

  return (
    <div
      className={`layout ${theme}`}
      style={{ "--sidebar-width": isCollapsed ? "100px" : "250px" }}
    >

      {isMobile && (
        <div
        className="sidebar-backdrop"
        onClick={()=>setIsMobile(false)}
        />

      
      )}
      <Sidebar
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
        isMobile={isMobile}
        onMobileClose = {()=>setIsMobile(false)}
      />
      <div>
        <Header
        theme={theme}
         onHamburgerClick={() => setIsMobile((prev) => !prev)}
        />
        <div style={{paddingLeft:"25px",
          background: theme === "light" ? "#F8F9FA" : "#0F172A",
            color: theme === "light" ? "#0F172A" : "#F8F9FA"
        }} className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
