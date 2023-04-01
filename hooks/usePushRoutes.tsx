import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

function usePushRoutes() {
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

  const toWeatherPage = () => {
    push("/weather");
  };

  return {
    logout,
    login,
    toLoginPage,
    toHomePage,
    toWeatherPage,
  };
}

export default usePushRoutes;
