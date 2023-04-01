import Button from "@/components/ui/button";
import useAuthUser from "@/hooks/usePushRoutes";

function Login() {
  const { login } = useAuthUser();

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
