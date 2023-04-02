import { createContext, useState } from "react";

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
}

interface DefaultDataType {
  weatherData: null | WeatherData;
  setWeatherData: React.Dispatch<
    React.SetStateAction<DefaultDataType["weatherData"]>
  >;
  city: null | string;
  setCity: React.Dispatch<React.SetStateAction<DefaultDataType["city"]>>;
}

const defaultData: DefaultDataType = {
  weatherData: null,
  setWeatherData: () => {},
  city: null,
  setCity: () => {},
};

const WeatherContext = createContext(defaultData);

const WeatherContextProvider = ({ children }: any) => {
  const [weatherData, setWeatherData] = useState(defaultData.weatherData);
  const [city, setCity] = useState(defaultData.city);
  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        setWeatherData,
        city,
        setCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
