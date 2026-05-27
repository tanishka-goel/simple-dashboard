import React, { useContext } from "react";
import "../../css/modals/profilemodal.css";
import { ThemeContext } from "../../context/ThemeProvider";

const ProfileModal = ({ user, onClose }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`modal-profile-overlay ${theme}`}>
      <div className="profile-modal">
        <div className="pfp-section">
          <h2>User Profile</h2>
          <button className="close-pfp-btn" onClick={onClose}>X</button>
        </div>
        <img src={user?.image} alt="user image" height="220px" width="220px" />
      </div>
    </div>
  );
};

export default ProfileModal;
