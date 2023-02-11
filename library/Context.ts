import { createContext } from "react";
import { Forecast } from "./types/Forecast";

export type WeatherContextType = {
  loading: boolean;
  data: Forecast | null;
};

export const WeatherContext = createContext<WeatherContextType>({
  loading: true,
  data: null,
});
