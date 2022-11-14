import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  toggleTheme: () => {},
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialModeValue);

  function toggleTheme() {
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  return (
    <ColorModeContext.Provider
      value={{ mode: mode, setMode: setMode, toggleTheme: toggleTheme }}
    >
      {props.children}
    </ColorModeContext.Provider>
  );
}
