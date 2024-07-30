import { Balthazar, Playfair_Display } from "next/font/google";

export const primary = Balthazar({ subsets: ["latin"], weight: ["400"] });

export const secondary = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});
