import useLogInOutUser from "@/hooks/useAuthUser";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface MainProps {
  user: UserProfile | undefined;
}

function Main(props: MainProps) {
  const { user } = props;

  if (user) {
    return <>asdasdasd</>;
  }

  return;
}

export default Main;
