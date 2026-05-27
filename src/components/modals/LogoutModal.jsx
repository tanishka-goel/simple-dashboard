import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider';
import "../../css/deletemodal.css"

const LogoutModal = ({ user, onConfirm, onClose }) => {
   const { theme } = useContext(ThemeContext);
    return (
      <div className={`modal-overlay ${theme}`}>
        <div className="modal">
          <p>
            Are you sure you want to sign out{" "}
            <strong>
              {user?.firstName} {user?.lastName}
            </strong> ?
          </p>
  
          <div className="modal-actions">
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
  
            <button className="confirm-btn" onClick={onConfirm}>
              Logo out
            </button>
          </div>
        </div>
      </div>
    );
}

export default LogoutModal