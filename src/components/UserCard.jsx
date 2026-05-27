import React from "react";
import "../css/components/usercard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card" key={user.id}>
        <img src={`${user.image}`} alt="" />
      <p className="name">
        {user.firstName} {user.lastName || user.title} 
      </p>
      <p>{user.email}</p>
      <p>{user.university}</p>
    </div>
  );
};

export default UserCard;
