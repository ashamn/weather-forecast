import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { useUserContext } from "./context/useUserContext";

function useSetData() {
  const { user, isLoading, error } = useUser();
  const { setUser, setLoading, setError } = useUserContext();

  useEffect(() => {
    setUser(user);
  }, [user, setUser]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  useEffect(() => {
    setError(error);
  }, [error, setError]);

  return {
    user,
  };
}

export default useSetData;
