import { useWeatherContext } from "@/hooks/context/useWeatherContext";
import { useEffect, useMemo, useState } from "react";
import format from "date-fns/format";
import id from "date-fns/locale/id";

function WeatherTable() {
  const [mobileView, setMobileView] = useState(false);
  const { weatherData } = useWeatherContext();
  const date = useMemo(
    () =>
      weatherData?.dt
        ? format(new Date(weatherData?.dt), `EEEE, d MMM yyyy 'pukul' HH:mm`, {
            locale: id,
          })
        : "",
    [weatherData?.dt]
  );

  // Detect mobile view
  useEffect(() => {
    if (window.innerWidth < 767) {
      setMobileView(true);
    }

    const handleResize = () => {
      if (window.innerWidth < 767) setMobileView(true);
      else if (window.innerWidth > 767) setMobileView(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Apply changes acc to view
  const tableData = useMemo(() => {
    if (weatherData) {
      let tableHead = [];
      let data = [];
      const {
        main: { temp, pressure, humidity },
        weather,
      } = weatherData;
      if (mobileView) {
        tableHead = ["Date (mm/dd/yyyy)", "Temp (F)"];
        data = [date, temp];
      } else {
        tableHead = [
          "Date (mm/dd/yyyy)",
          "Temp (F)",
          "Description",
          "Main",
          "Pressure",
          "Humidity",
        ];
        data = [
          date,
          temp,
          weather[0]?.description,
          weather[0]?.main,
          pressure,
          humidity,
        ];
      }
      return {
        tableHead,
        data,
      };
    }

    return null;
  }, [mobileView, date, weatherData]);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {!!tableData &&
              tableData.tableHead.map((head, indx) => {
                return (
                  <th key={indx} scope="col" className="px-6 py-3">
                    {head}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {!!tableData &&
              tableData.data.map((data, indx) => {
                return (
                  <td key={indx} className="px-6 py-4">
                    {data}
                  </td>
                );
              })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
