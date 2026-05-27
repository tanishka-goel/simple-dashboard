import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider';
import "../../css/modals/logoutmodal.css"

const LogoutModal = ({ user, onConfirm, onClose }) => {
   const { theme } = useContext(ThemeContext);
    return (
      <div className={`logout-modal-overlay ${theme}`}>
        <div className="logout-modal">
          <p>
            Are you sure you want to sign out{" "}
            <strong>
              {user?.firstName} {user?.lastName}
            </strong> ?
          </p>
  
          <div className="logout-modal-actions">
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
  
            <button className="confirm-btn" onClick={onConfirm}>
              Log out
            </button>
          </div>
        </div>
      </div>
    );
}

export default LogoutModal