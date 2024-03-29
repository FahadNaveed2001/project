"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { httpAxios } from "@/helper/helper";
import { currentUser } from "@/services/userservices";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {


    async function load() {

      try {
         const tempUser = await currentUser();
        console.log(tempUser);
        setUser({ ...tempUser });
      } catch (error) {
                console.log(error);
        toast.warning("Error in loading Current User !!");
        setUser(undefined);
      }
    }
    // const fetchCurrentUser = async () => {
    //   try {
    //     const tempUser = await currentUser();
    //     console.log(tempUser);
    //     setUser({ ...tempUser });
    //   } catch (error) {
    //     console.log(error);
    //     toast.warning("Error in loading Current User !!");
    //     setUser(undefined);
    //   }
    // };
  
    // fetchCurrentUser(); 
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
