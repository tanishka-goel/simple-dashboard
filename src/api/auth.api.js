import BaseApi from "./base.api";

export async function loginUser({username,password}) {
  const response = await BaseApi.post(
    "/auth/login",
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
  const response = await BaseApi.get("/auth/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
