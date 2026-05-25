import axios from "axios";

export async function getUsers() {
  const response = await axios.get("https://dummyjson.com/users");

  const deletedIds = JSON.parse(localStorage.getItem("deletedIds") || "[]"); 
  const apiUsers = response.data.users.filter(u => !deletedIds.includes(u.id));
  const localUsers = JSON.parse(localStorage.getItem("addedUsers") || "[]");

  return [...apiUsers, ...localUsers];
}

export async function addUsers(newdata) {
  const response = await axios.post("https://dummyjson.com/users/add", newdata);
  console.log("post api user data", newdata);
  console.log("post api user data", response.data.users);
  return response.data;
}

export async function deleteUser(id) {
  const localUsers = JSON.parse(localStorage.getItem("addedUsers")||"[]")
  const isLocalUser = localUsers.some((user)=> user.id===id)

  if (isLocalUser) {
    return { id, isLocal: true }; 
  }

  const response = await axios.delete(`https://dummyjson.com/users/${id}`)
  console.log("deleted user with id", id)
  return response.data
}
