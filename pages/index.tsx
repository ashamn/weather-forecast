import useAuthUser from "@/hooks/useAuthUser";
import { useEffect } from "react";

export default function Home() {
  const { isLoading, user, error, toLoginPage, toHomePage } = useAuthUser();

  useEffect(() => {
    if (user) {
      toHomePage();
    } else {
      toLoginPage();
    }
  }, [user, toLoginPage, toHomePage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
}
