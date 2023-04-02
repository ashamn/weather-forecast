import { useWeatherContext } from "@/hooks/context/useWeatherContext";
import { useCallback } from "react";
import Button from "../ui/button";
import SearchInput from "../ui/searchInput";

interface SearchProps {
  onClick: (a: string) => void;
}

function Search(props: SearchProps) {
  const { onClick } = props;
  const { setCity, city } = useWeatherContext();

  const setText = useCallback(
    (text: string) => {
      setCity(text);
    },
    [setCity]
  );

  return (
    <div className="flex justify-center">
      <div className="w-80">
        <SearchInput setText={setText} text={city} />
        <div className="flex justify-center mt-5">
          <Button onClick={() => onClick(city ?? "")}>Display Weather</Button>
        </div>
      </div>
    </div>
  );
}

export default Search;
