import React from "react";
import "../../css/components/skeleton.css";

const ProfileSkeleton = () => {
  return (
    <div className="main-div skeleton">
      <div className="main-deets-div skeleton2">
        <div className="pfp-circle skeleton"></div>
        <div className="pfp-rec skeleton"></div>
      </div>

      <div className="more-deets-div skeleton2">
        <div className="one skeleton"></div>
        <div className="one skeleton"></div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
