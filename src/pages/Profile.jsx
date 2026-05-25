import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeProvider";
import { LogOut } from "lucide-react";
import { logout } from "../features/authSlice";
import "../css/profile.css";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("personal-details");

  return (
    <div>
      <div className="division-div">
        <div className="basic-info-div">
          <img className="profile-image" src={user.image} height="300px" />
          <div className="namerole">
            <h2 className="user-fullname">
              {user?.firstName} {user?.lastName} {user?.maidenName}
            </h2>
            <p
              className="user-role"
              style={{
                backgroundColor: `${user.role === "admin" ? "#ADD8E6" : "#90EE90"}`,
              }}
            >
              {user?.role}
            </p>
          </div>
        </div>

        <div>
          <div className={`tabs ${theme}`}>
            <button
              onClick={() => setActiveTab("personal-details")}
              className={`tabbtn ${activeTab === "personal-details" ? "tabbtn--active" : ""}`}
            >
              Personal Details
            </button>
            <button
              onClick={() => setActiveTab("contact-details")}
              className={`tabbtn ${activeTab === "contact-details" ? "tabbtn--active" : ""}`}
            >
              Contact Details
            </button>
            <button
              onClick={() => setActiveTab("company-details")}
              className={`tabbtn ${activeTab === "company-details" ? "tabbtn--active" : ""}`}
            >
              Company Details
            </button>
            
          </div>
          {/* <hr /> */}

          <div>
            {activeTab === "personal-details" && (
              <div className={`details-div ${theme}`}>
                <p className="details-field">
                  <span className="details-header">Full Name</span> :{" "}
                  {user.firstName} {user.lastName}
                </p>
                <p className="details-field">
                  <span className="details-header">Age</span> : {user.age}
                </p>
                <p className="details-field">
                  <span className="details-header">Gender</span> : {user.gender}
                </p>
                <p className="details-field">
                  <span className="details-header">Username</span> :{" "}
                  {user.username}
                </p>
                <p className="details-field">
                  <span className="details-header">DOB</span> : {user.birthDate}
                </p>
                <p className="details-field">
                  <span className="details-header">Blood Group</span> :{" "}
                  {user.bloodGroup}
                </p>
              </div>
            )}

            {activeTab === "contact-details" && (
              <div className="details-div">
                <p className="details-field">
                  <span className="details-header">Email</span> : {user.email}
                </p>
                <p className="details-field">
                  <span className="details-header">Phone</span> : {user.phone}
                </p>
                <p className="details-field">
                  <span className="details-header">Address</span> :{" "}
                  {user.address?.address}, {user.address?.city},{" "}
                  {user.address?.state}, {user.address?.country}
                </p>
                <p className="details-field">
                  <span className="details-header">University</span> :{" "}
                  {user.university}
                </p>
                <p className="details-field">
                  <span className="details-header">Postal Code</span> :{" "}
                  {user?.address?.postalCode}
                </p>
                <p className="details-field">
                  <span className="details-header">State Code</span> :{" "}
                  {user?.address?.stateCode}
                </p>
                <p className="details-field">
                  <span className="details-header">Country</span> :{" "}
                  {user?.address?.country}
                </p>
              </div>
            )}

            {activeTab === "company-details" && (
              <div className="details-div">
                <p className="details-field">
                  <span className="details-header">Company Name</span> :{" "}
                  {user?.company?.name}
                </p>
                <p className="details-field">
                  <span className="details-header">Department</span> :{" "}
                  {user?.company?.department}
                </p>
                <p className="details-field">
                  <span className="details-header">Job Title</span> :{" "}
                  {user?.company?.title}
                </p>
                <p className="details-field">
                  <span className="details-header"> Company Address</span> :{" "}
                  {user.company?.address?.address},{" "}
                  {user.company?.address?.city}, {user.company?.address?.state},{" "}
                  {user.company?.address?.country}
                </p>
                <p className="details-field">
                  <span className="details-header">Postal Code</span> :{" "}
                  {user?.company?.address?.postalCode}
                </p>
                <p className="details-field">
                  <span className="details-header">State Code</span> :{" "}
                  {user?.company?.address?.stateCode}
                </p>
                <p className="details-field">
                  <span className="details-header">Country</span> :{" "}
                  {user?.company?.address?.country}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
