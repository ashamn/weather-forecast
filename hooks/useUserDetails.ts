import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

function useUserDetails() {
  const { user } = useUser();
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
