import { useEffect, useState } from "react";
import { useUserContext } from "./context/useUserContext";

function useUserDetails() {
  const { user, userData, setUserData } = useUserContext();

  useEffect(() => {
    if (!!user?.sub && !userData) {
      const getUserDetails = async () => {
        const data = await fetch(`/api/details/${user.sub}`);
        const properties = await data.json();
        setUserData({
          ...user,
          ...properties,
        });
      };
      getUserDetails();
    }
  }, [user, userData, setUserData]);

  return {
    userData,
  };
}

export default useUserDetails;
