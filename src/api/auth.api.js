import axios from "axios";

export async function loginUser({username,password}) {
  const response = await axios.post(
    "https://dummyjson.com/auth/login",
    {
      username,
      password,
      expiresInMinutes: 60,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
}

export async function fetchCurrUser(token) {
  const response = await axios.get("https://dummyjson.com/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
