import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

function useAuthUser() {
  const { user, isLoading, error } = useUser();
  const router = useRouter();
  const { push } = router;

  const logout = () => {
    push("/api/auth/logout");
  };

  const login = () => {
    push("/api/auth/login");
  };

  const toLoginPage = () => {
    push("/login");
  };

  const toHomePage = () => {
    push("/home");
  };

  return {
    logout,
    login,
    toLoginPage,
    toHomePage,
    user,
    isLoading,
    error,
  };
}

export default useAuthUser;
