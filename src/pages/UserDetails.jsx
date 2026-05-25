import React from "react";
import { useParams } from "react-router-dom";
import { useUsesrs } from "../queries/users.query";

const UserDetails = () => {
  const { id } = useParams();
  const { data: users } = useUsesrs();

  const currUser = users?.find((u) => u.id === Number(id));
  console.log(currUser);
  return (
  <div>
    <h1>User Profile</h1>
    <p>
 {currUser?.firstName || "No Details"} {currUser?.lastName}
    </p>
   
  </div>
);
};

export default UserDetails;
