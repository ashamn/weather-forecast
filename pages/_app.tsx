import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Layout from "@/components/layout/layout";
import { UserContextProvider } from "@/context/userContext";
import { WeatherContextProvider } from "@/context/weatherContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <UserContextProvider>
        <WeatherContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </WeatherContextProvider>
      </UserContextProvider>
    </UserProvider>
  );
}
