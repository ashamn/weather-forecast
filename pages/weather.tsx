import Button from "@/components/ui/button";
import WeatherTable from "@/components/weather/table";
import usePushRoutes from "@/hooks/usePushRoutes";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

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

export const getServerSideProps = withPageAuthRequired({
  returnTo: "/home",
});

export default Weather;
