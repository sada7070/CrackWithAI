import { useEffect, useState } from "react";
import axios from "axios";

export type User = {
  firstName: string;
  userId: string;
};

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
            return;
        }
        
        const res = await axios.get("/api/user", {
          headers: {
            Authorization: token,
          },
        });

        setUser(res.data);
      } catch (e) {
        console.error("Error fetching user:", e);
      }
    };

    fetchUser();
  }, []);

  return user;
}