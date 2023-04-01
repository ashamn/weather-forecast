import { UserProfile } from "@auth0/nextjs-auth0/client";
import { createContext, useState } from "react";

interface DefaultDataType {
  user: undefined | UserProfile;
  setUser: React.Dispatch<React.SetStateAction<DefaultDataType["user"]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<DefaultDataType["loading"]>>;
  error: any;
  setError: React.Dispatch<React.SetStateAction<DefaultDataType["error"]>>;
}

const defaultData: DefaultDataType = {
  user: undefined,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
};

const UserContext = createContext(defaultData);

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(defaultData.user);
  const [loading, setLoading] = useState(defaultData.loading);
  const [error, setError] = useState(defaultData.error);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
