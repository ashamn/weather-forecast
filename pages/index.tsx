import useAuthUser from "@/hooks/useAuthUser";
import { useEffect, useState } from "react";

export default function Home() {
  const { isLoading, user, error, toLoginPage, toHomePage } = useAuthUser();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (user && !dataLoaded) {
        toHomePage();
        setDataLoaded(true);
      } else {
        toLoginPage();
      }
    }
  }, [user, isLoading, dataLoaded, toLoginPage, toHomePage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
}
