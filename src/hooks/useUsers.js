import React, { useEffect, useState } from "react";
import { getUsers } from "../api/user.api";
import { getProducts } from "../api/product.api";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const res = await getProducts();
        // console.log("res on dashbaord", res);
        setUsers(res.products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log("Error fetching data", error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

//   console.log("data", users);
return {users, isLoading, error}
};
