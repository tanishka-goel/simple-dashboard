import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addUsers, deleteUser, getUsers } from "../api/user.api";
import { toast } from "react-toastify";

export const useUsesrs = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useAddUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addUsers,
    onSuccess: (responseData,newUser) => {
      const existingData = JSON.parse(
        localStorage.getItem("addedUsers") || "[]",
      );
      const updatedData = [...existingData, newUser];
      localStorage.setItem("addedUsers", JSON.stringify(updatedData));
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success('User Added Successfully',{
        autoClose:3000
      })
    },
    onError: (err) => {
      console.log("Error in user addition : ", err);
      toast.error("Failed to add user",{
        autoClose:3000
      })
    },
  });
};

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: (data, id) => {
      const deletedIds = JSON.parse(localStorage.getItem("deletedIds") || "[]");
      localStorage.setItem("deletedIds", JSON.stringify([...deletedIds, id]));

      const existingData = JSON.parse(
        localStorage.getItem("addedUsers") || "[]",
      );
      const updated = existingData.filter((user) => user.id !== id);
      localStorage.setItem("addedUsers", JSON.stringify(updated));
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User Deleted Successfully")
    },
    onError:(err) =>{
      toast.error("Error Deleting user")
    }
  });
};
