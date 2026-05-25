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
        setUsers(res.products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

return {users, isLoading, error}
};
