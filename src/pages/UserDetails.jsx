import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../queries/users.query";
import "../css/pages/userdetails.css";
import { Cake, CircleUserRound, Earth, GraduationCap, Mail, MapPin, MapPinned, Phone, User } from "lucide-react";
import { ThemeContext } from "../context/ThemeProvider";
import ProfileSkeleton from "../components/skeletons/ProfileSkeleton";
import { toast } from "react-toastify";
import UserNotFound from "./UserNotFound";

const UserDetails = () => {
  const { id } = useParams();
  const { data: users, isLoading:userLoading, error:userError } = useUsers();
  const {theme} = useContext(ThemeContext)

  const currUser = users?.find((u) => u.id === Number(id));

  if(userLoading) return (
    <div>
      <ProfileSkeleton/>
    </div>
  )

  if(!currUser) return <UserNotFound/>

  if (userError) {
  toast.error(`Error showing user details: ${userError}`);
  return <p>Error loading user details.</p>;
}

  return (
    <div className={`main-user-div ${theme}`}>
      <h1>User Profile</h1>

      <div className="full-div">
        <div className="profile cd">
          <img className="pfp" src={currUser?.image || "userpfp.jpeg"} alt={currUser?.firstName+" "+ currUser.lastName || ""} />

          <div className="user-deets">
            <p className="user-fullname">
              {currUser?.firstName} {currUser?.lastName}
            </p>
            <p
            style={{ color: theme === "light" ? "#0F172A" : "#e8ebf0",}} 
            className="user-role">{currUser?.role}</p>
            <p className="user-city">
              {currUser?.address?.city}, {currUser?.address?.country}
            </p>
          </div>
        </div>

        <div className="personal-info cd">
          <p className="deets"> <span className="info-header"><User size={20}/>Full Name</span> <br />{currUser?.firstName} {currUser?.lastName} {currUser?.maidenName}</p>
          <p className="deets"><span className="info-header"><Mail  size={20}/> Email</span> <br />{currUser?.email}</p>
          <p className="deets"><span className="info-header"><Phone  size={20}/>Phone</span> <br />{currUser?.phone}</p>
          <p className="deets"><span className="info-header"><Cake  size={20}/>DOB</span> <br />{currUser?.birthDate}</p>
          <p className="deets"><span className="info-header"><GraduationCap  size={20}/>University</span> <br />{currUser?.university}</p>
          <p className="deets"><span className="info-header"><CircleUserRound  size={20}/>User Name</span> <br />{currUser?.username}</p>
        </div>

        <div className="address cd">

           <p className="deets"> <span className="info-header"><Earth  size={20}/>Country</span> <br />{currUser?.address?.country}</p>
          <p className="deets"><span className="info-header"><MapPin  size={20}/>City, State</span> <br />{currUser?.address?.city}, {currUser?.address?.state}</p>
          <p className="deets"><span className="info-header"><MapPinned  size={20}/>Postal Code</span> <br />{currUser?.address?.stateCode} {currUser?.address?.postalCode}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
