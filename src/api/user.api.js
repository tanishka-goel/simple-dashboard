import axios from "axios";
import BaseApi from "./base.api";

export async function getUsers() {
  const response = await BaseApi.get("/users");

  const deletedIds = JSON.parse(localStorage.getItem("deletedIds") || "[]"); 
  const apiUsers = response.data.users.filter(u => !deletedIds.includes(u.id));
  const localUsers = JSON.parse(localStorage.getItem("addedUsers") || "[]");

  return [...apiUsers, ...localUsers];
}

export async function addUsers(newdata) {
  const response = await BaseApi.post("/users/add", newdata);
  return response.data;
}

export async function deleteUser(id) {
  const localUsers = JSON.parse(localStorage.getItem("addedUsers")||"[]")
  const isLocalUser = localUsers.some((user)=> user.id===id)

  if (isLocalUser) {
    return { id, isLocal: true }; 
  }

  const response = await BaseApi.delete(`/users/${id}`)
  return response.data
}
