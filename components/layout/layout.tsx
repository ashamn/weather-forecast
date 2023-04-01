import useSetData from "@/hooks/useSetData";
import { Fragment } from "react";
import Header from "../header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { user } = useSetData();
  const loggedIn = !!user;

  return (
    <Fragment>
      <Header loggedIn={loggedIn} />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
