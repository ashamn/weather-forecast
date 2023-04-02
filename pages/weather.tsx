import Button from "@/components/ui/button";
import WeatherTable from "@/components/weather/table";
import { useWeatherContext } from "@/hooks/context/useWeatherContext";
import usePushRoutes from "@/hooks/usePushRoutes";

function Weather() {
  const { toHomePage } = usePushRoutes();

  return (
    <div>
      <div className="flex flex-col p-5 mt-20 justify-center">
        <WeatherTable />
        <div className="flex justify-end mt-10">
          <Button onClick={() => toHomePage()}>Back</Button>
        </div>
      </div>
    </div>
  );
}

export default Weather;
