import React, { useContext } from "react";
import "../../css/components/skeleton.css";
import { ThemeContext } from "../../context/ThemeProvider";

export const ChartSkeleton = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={`charts ${theme}`}>
      <div className="chart-div1 skeleton">
        <div className="circle skeleton2">

        </div>
      </div>
      <div className="chart-div2 skeleton">
        <div className="rectangle skeleton2">

        </div>
      </div>
    </div>
  );
};
