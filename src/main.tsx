import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { colorScheme, toggleColorScheme } from "./config/colorSchemeConfig";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
