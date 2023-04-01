import { useEffect, useState } from "react";
import { useUserContext } from "./useUserContext";

function useUserDetails() {
  const { user } = useUserContext();
  const [userData, setUserData] = useState(null);

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
  }, [user, userData]);

  return {
    userData,
  };
}

export default useUserDetails;
