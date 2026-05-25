import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCurrUser, loginUser } from "../api/auth.api";

const storedUser = JSON.parse(localStorage.getItem("user") || "null");
const storedToken = localStorage.getItem("token") || null;

export const loginthunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const userData = await loginUser(credentials);
      const fetchUser = await fetchCurrUser(userData.accessToken);
      return { user: fetchUser, token: userData.accessToken };
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Invalid username or password.",
      );
    }
  },
);

const initialState = {
  user: storedUser,
  token: storedToken,
  isAuthenticated: !!storedToken,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout(state) {
        state.user=null;
        state.token=null;
        state.isAuthenticated=false;
        state.error=null;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    },
  },

  extraReducers:(builder) =>{
    builder
    .addCase(loginthunk.pending,(state)=>{
        state.isLoading = true;
        state.error     = null;
    })

     .addCase(loginthunk.fulfilled,(state,action)=>{
        state.user            = action.payload.user;
        state.token           = action.payload.token;
        state.isAuthenticated = true;
        state.isLoading       = false;
        localStorage.setItem("user",  JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
    })

     .addCase(loginthunk.rejected,(state,action)=>{
        state.isLoading = false;
        state.error     = action.payload;
    })
  }
});

export const {logout} = authSlice.actions
export default authSlice.reducer