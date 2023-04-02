import { WeatherContext } from "@/context/weatherContext";
import { useContext } from "react";

export const useWeatherContext = () => useContext(WeatherContext);
