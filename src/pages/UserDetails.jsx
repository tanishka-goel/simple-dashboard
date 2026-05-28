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

  const currUser = users?.find((u) => String(u.id) === String(id));

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
          <img className="pfp" src={currUser?.image || "/userpfp.jpeg"} alt={currUser?.firstName} />

          <div className="user-deets">
            <p className="user-fullname">
              {currUser?.firstName} {currUser?.lastName}
            </p>
            <p
            style={{ color: theme === "light" ? "#0F172A" : "#e8ebf0",}} 
            className="user-role">{currUser?.role || "User"}</p>
            <p className="user-city">
              {currUser?.address?.city ||"No Information Provided"}, {currUser?.address?.country ||"No Country Information Provided"}
            </p>
          </div>
        </div>

        <div className="personal-info cd">
          <p className="deets"> <span className="info-header"><User size={20}/>Full Name</span> <br />{currUser?.firstName} {currUser?.lastName} {currUser?.maidenName}</p>
          <p className="deets"><span className="info-header"><Mail  size={20}/> Email</span> <br />{currUser?.email ||"No Email Provided"}</p>
          <p className="deets"><span className="info-header"><Phone  size={20}/>Phone</span> <br />{currUser?.phone ||"No Phone Number Provided"}</p>
          <p className="deets"><span className="info-header"><Cake  size={20}/>DOB</span> <br />{currUser?.birthDate ||"No Date of birth Provided"}</p>
          <p className="deets"><span className="info-header"><GraduationCap  size={20}/>University</span> <br />{currUser?.university ||"No University Information"}</p>
          <p className="deets"><span className="info-header"><CircleUserRound  size={20}/>User Name</span> <br />{currUser?.username || currUser?.firstName + currUser?.lastName?.slice(0,1) + currUser?.maidenName?.slice(0,1) ||"No Username Provided"}</p>
        </div>

        <div className="address cd">

           <p className="deets"> <span className="info-header"><Earth  size={20}/>Country</span> <br />{currUser?.address?.country  ||"No Country Information Provided"}</p>
          <p className="deets"><span className="info-header"><MapPin  size={20}/>City, State</span> <br />{currUser?.address?.city}, {currUser?.address?.state ||"No State information Provided"}</p>
          <p className="deets"><span className="info-header"><MapPinned  size={20}/>Postal Code</span> <br />{currUser?.address?.stateCode} {currUser?.address?.postalCode ||"No Postal code Provided"}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
