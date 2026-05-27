import React from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../queries/users.query";
import { Frown } from "lucide-react";

const UserNotFound = () => {
  const { id } = useParams();

  return (
    <div>
      <Frown />
      <p>Uh Oh</p>
      <h2>User #{id} not found</h2>
      <p>This user doesn't exist.</p>
    </div>
  );
};

export default UserNotFound;
