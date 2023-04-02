import Search from "@/components/home/search";
import UserDetails from "@/components/home/userDetails";
import { useWeatherContext } from "@/hooks/context/useWeatherContext";
import usePushRoutes from "@/hooks/usePushRoutes";
import useUserDetails from "@/hooks/useUserDetails";
import { useEffect } from "react";

function Home() {
  const { userData } = useUserDetails();
  const { setWeatherData } = useWeatherContext();
  const { toWeatherPage } = usePushRoutes();

  const onDisplayWeather = async (city: string) => {
    let weatherData = null;
    try {
      const data = await fetch(`/api/weather/${city}`);
      weatherData = await data.json();
    } catch (error) {
      console.log(error);
    }

    if (weatherData) {
      setWeatherData(weatherData);
      toWeatherPage();
    }
  };

  return (
    <>
      <div className="flex flex-col mt-20 justify-center">
        <UserDetails user={userData} />
        <Search onClick={onDisplayWeather} />
      </div>
    </>
  );
}
export default Home;
