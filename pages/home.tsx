import Search from "@/components/home/search";
import UserDetails from "@/components/home/userDetails";
import useUserDetails from "@/hooks/useUserDetails";
import { useEffect } from "react";

function Home() {
  const { userData } = useUserDetails();

  return (
    <>
      <div className="flex flex-col mt-20 justify-center">
        <UserDetails user={userData} />
        <Search />
      </div>
    </>
  );
}
export default Home;
