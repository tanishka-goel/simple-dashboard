import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import "../../css/modals/deletemodal.css";

const DeleteModal = ({ user, onConfirm, onClose }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`modal-overlay ${theme}`}>
      <div className="modal">
        <p>
          You are about to delete{" "}
          <strong>
            {user?.firstName} {user?.lastName}
          </strong>
        </p>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="confirm-btn" onClick={onConfirm}>
            Delete User
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
