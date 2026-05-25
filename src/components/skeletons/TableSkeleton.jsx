import React from "react";
import "../../css/skeleton.css";

const TableSkeleton = () => {
  return (
    <div className="table-skel-div skeleton">
        {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="trows-skel">
          <div className="skeleton sid"></div>
          <div className="skeleton sname"></div>
          <div className="skeleton sage"></div>
          <div className="skeleton semail"></div>
          <div className="skeleton sphone"></div>
          <div className="skeleton scity"></div>
          <div className="skeleton scompany"></div>
          <div className="skeleton saction"></div>
        </div>
      ))}
      
    </div>
  );
};

export default TableSkeleton;
