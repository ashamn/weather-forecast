import useAuthUser from "@/hooks/useAuthUser";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Button from "./ui/button";

function Header() {
  const { logout, user } = useAuthUser();
  const loggedIn = !!user;

  return (
    <header>
      <nav className="flex w-full items-center justify-between bg-white py-2 px-6 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200">
        <ul className="flex w-full flex-row justify-between items-center">
          <li className="flex items-center">
            <Image
              className="mr-5"
              src="/cloud.svg"
              alt="Cloud"
              width={50}
              height={50}
            />
            <p className="text-2xl">Weather Forecast</p>
          </li>
          <li>
            {loggedIn && (
              <div>
                <Button onClick={logout}>Logout</Button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
