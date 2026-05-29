import React from "react";
import { useParams } from "react-router-dom";
import { Frown } from "lucide-react";
import "../css/pages/usernotfound.css";

const UserNotFound = () => {
  const { id } = useParams();

  return (
    <div className="errorpage">
      <div className="content">
        <Frown size={65} />
        <p>Uh Oh!</p>
        <h2>User #{id} not found</h2>
        <p>This user doesn't exist.</p>
      </div>
    </div>
  );
};

export default UserNotFound;
