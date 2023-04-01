import { UserData } from "@/types/user";
import Loading from "../ui/loading";

interface UserDetailsProps {
  user: UserData | undefined | null;
}

function UserDetails(props: UserDetailsProps) {
  const { user } = props;

  if (!user) {
    return (
      <div className="mb-20">
        <Loading />{" "}
      </div>
    );
  }

  return (
    <div className="mb-20">
      <p className="text-center text-xl font-semibold capitalize pb-2">
        {user?.name}
      </p>
      <p className="text-center text-lg">{user?.html_url}</p>
    </div>
  );
}

export default UserDetails;
