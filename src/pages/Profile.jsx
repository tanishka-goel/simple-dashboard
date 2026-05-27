import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeProvider";
import "../css/profile.css";
import ProfileSkeleton from "../components/skeletons/ProfileSkeleton";

const Profile = () => {
  const { user, isLoading:userLoading } = useSelector((state) => state.auth);
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("personal-details");

  if(userLoading) return (<ProfileSkeleton/>)

  return (
    <div>
      
      <div className="profile-page">
        <div className="row row1">
          <img src={user?.image} alt={user?.firstName+" "+user?.lastName} />
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

    </div>
  );
};

export default Profile;
