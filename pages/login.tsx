import Button from "@/components/ui/button";
import { useUserContext } from "@/hooks/context/useUserContext";
import usePushRoutes from "@/hooks/usePushRoutes";
import { useEffect } from "react";

function Login() {
  const { login, toHomePage } = usePushRoutes();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      toHomePage();
    }
  }, [user, toHomePage]);

  return (
    <>
      <div className="flex mt-20 justify-center">
        <div className="max-w-lg">
          <p className="text-justify mb-10">
            Welcome to the weather forecast web application. Please login with
            your Github user to use the application and view the weather in your
            city.
          </p>
          <Button onClick={login}>Login</Button>
        </div>
      </div>
    </>
  );
}

export default Login;
