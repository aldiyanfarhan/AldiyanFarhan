import { ColorScheme } from "@mantine/core";
import { useState } from "react";

export const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
export const toggleColorScheme = (value?: ColorScheme) =>
  setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
