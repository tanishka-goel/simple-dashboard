import React, { useEffect, useState } from "react";
import "../css/pages/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginthunk } from "../features/authSlice";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { toast } from "react-toastify";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, error } = useSelector(
    (state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const from = "/dashboard";

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isAuthenticated) navigate(from, { replace: true });
    // toast.success(`Welcome ${user?.firstName}`)
  }, [isAuthenticated, navigate, from]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Username is required");
      return;
    }

    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }
    dispatch(loginthunk({ username, password }));
  };

  useEffect(()=>{
if (error) return (
    toast.error("Incorrect credentials. Please enter correct username and password.")
  )
  },[error])

  

  return (
    <div className="login-div">
      <div className="image-div">
        <img src="loginbg2.avif" alt="" />
      </div>
      <div className="form-div">
        <h1>AnalytiQ</h1>

        <form className="login-form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="username">Username</label>
            <div className="input-wrapper">
              <User />
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <Lock />
              <input
                type={showPassword?"text":"password"}
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p
                style={{ backgroundColor: "transparent", outline: "none" }}
                onClick={togglePassword}
              >
                {" "}
               {showPassword? <EyeOff />:<Eye/>}
              </p>

            </div>
          </div>

          <button className="submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};
