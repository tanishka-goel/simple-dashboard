import React from "react";
import "../../css/components/skeleton.css";

export const FilterSkeleton = () => {
  return (
    <div>
      <div className="skeleton2 filter-bar">
        <div
          style={{ width: "190px", height: "50px" }}
          className="skeleton"
        ></div>
        <div
          style={{ width: "190px", height: "50px" }}
          className="skeleton"
        ></div>
        <div
          style={{ width: "190px", height: "50px" }}
          className="skeleton"
        ></div>
        <div
          style={{ width: "190px", height: "50px" }}
          className="skeleton"
        ></div>
      </div>
    </div>
  );
};
