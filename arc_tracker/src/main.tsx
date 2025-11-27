import React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import App from "./App";
import "./index.css";

function Root() {
  const [colorScheme, setColorScheme] = useLocalStorage<"light" | "dark">({
    key: "arc-color-scheme",
    defaultValue: "dark",
  });

  const toggleColorScheme = () =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        colorScheme,
        colors: {
          arc: [
            "#fb0e10",
            "#fb1f1f",
            "#fb2f2f",
            "#fbcf0a",
            "#fbd92d",
            "#2ef286",
            "#4ff7a0",
            "#86f7ec",
            "#a1fbf1",
            "#c8fffa",
          ],
        },
        primaryColor: "arc",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App toggleColorScheme={toggleColorScheme} />
    </MantineProvider>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
