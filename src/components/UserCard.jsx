import React from "react";
import "../css/usercard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card" key={user.id}>
        <img src={`${user.image}`} alt="" />
      <p className="name">
        {user.firstName} {user.lastName || user.title} 
      </p>
      {/* <p style={{ color: user.gender === "female" ? "pink" : "blue", 
        backgroundColor: user.gender === "female" ? "red" : "green" }}>
        {user.gender}
      </p> */}
      <p>{user.email}</p>
      <p>{user.university}</p>
    </div>
  );
};

export default UserCard;
