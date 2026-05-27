import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeProvider";
import { LogOut } from "lucide-react";
import { logout } from "../features/authSlice";
import "../css/profile.css";
import ProfileSkeleton from "../components/skeletons/ProfileSkeleton";

const Profile = () => {
  const { user, isLoading:userLoading } = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("personal-details");

  if(userLoading) return (<ProfileSkeleton/>)

  return (
    <div>
      
      <div className="profile-page">
        <div className="row row1">
          <img src={user?.image} alt="" />
          <div>
            <p className="name">
              {user?.firstName} {user.lastName} {user.maidenName}
            </p>
            <div className="tags">
              <p>{user?.role}</p>
              <p>
                {user?.address?.state}, {user?.address?.country}
              </p>
            </div>
          </div>
        </div>
        <div className="row row2">
          <div className="box">
            <p>{user.age}</p>
            <p>AGE</p>
          </div>
          <div className="box">
            <p>{user.bloodGroup}</p>
            <p>BLOOD GROUP</p>
          </div>
          <div className="box">
            <p>{user.username}</p>
            <p>USERNAME</p>
          </div>
        </div>
        <div className="row row3">
          <div className="pi">
            <p>PERSONAL DETAILS</p>
            <div>
              <div className="user-detail-div">
                <p className="detail-heading">FULL NAME</p>
                <p className="detail-detail">
                  {" "}
                  {user?.firstName} {user.lastName} {user.maidenName}
                </p>
              </div>
              <div className="user-detail-div">
                <p className="detail-heading">GENDER</p>
                <p className="detail-detail"> {user?.gender}</p>
              </div>
              <div className="user-detail-div">
                <p className="detail-heading">AGE</p>
                <p className="detail-detail"> {user?.birthDate}</p>
              </div>
              <div>
                <p className="detail-heading">UNIVERSITY</p>
                <p className="detail-detail"> {user?.university}</p>
              </div>
            </div>
          </div>
          <div className="ai">
            <p>CONTACT DETAILS</p>
            <div>
              <div className="user-detail-div">
                <p className="detail-heading">EMAIL</p>
                <p className="detail-detail"> {user?.email}</p>
              </div>
              <div className="user-detail-div">
                <p className="detail-heading">PHONE</p>
                <p className="detail-detail"> {user?.phone}</p>
              </div>
              <div className="user-detail-div">
                <p className="detail-heading">ADDRESS</p>
                <p className="detail-detail">
                  {" "}
                  {user?.address?.address}, {user?.address?.city},{" "}
                  {user?.address?.state}, {user?.address?.country}{" "}
                </p>
              </div>
              <div className="user-detail-div">
                <p className="detail-heading">POSTAL CODE</p>
                <p className="detail-detail">
                  {user?.address?.stateCode} {user?.address?.postalCode}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row row4">
          <div>
            <p>{user?.company?.name}</p>
            <div className="comp-details">
              <div className="user-detail-div">
                <p className="detail-heading">JOB TITLE</p>
                <p className="detail-detail"> {user?.company?.title}</p>
              </div>

              <div className="user-detail-div">
                <p className="detail-heading">DEPARTMENT</p>
                <p className="detail-detail"> {user?.company?.department}</p>
              </div>

              <div className="user-detail-div">
                <p className="detail-heading">OFFICE ADDRESS</p>
                <p className="detail-detail">
                  {" "}
                  {user?.company?.address?.address},{" "}
                  {user?.company?.address?.city},{" "}
                  {user?.company?.address?.state},{" "}
                  {user?.company?.address?.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="division-div">
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
      </div> */}
    </div>
  );
};

export default Profile;
