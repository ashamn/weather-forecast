import Loading from "@/components/ui/loading";
import usePushRoutes from "@/hooks/usePushRoutes";
import { useUserContext } from "@/hooks/useUserContext";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

export default function Home() {
  const { toLoginPage, toHomePage } = usePushRoutes();
  const { user, loading: isLoading, error } = useUserContext();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!isLoading && !dataLoaded) {
      if (user) {
        toHomePage();
        setDataLoaded(true);
      } else {
        toLoginPage();
      }
    }
  }, [user, isLoading, dataLoaded, toLoginPage, toHomePage]);

  if (isLoading)
    return (
      <div className="flex flex-col mt-20 justify-center">
        <Loading />
      </div>
    );
  if (error) return <div>{error.message}</div>;
}
