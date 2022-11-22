import React from "react";
import "../src/styles/global.css";
import { CSSReset } from "../src/components/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/components/ColorMode";
import AddVideo from "../src/components/AddVideo";

const theme = {
  light: {
    backgroundBase: "#f7f7f7",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialModeValue={"light"}>
      {props.children}
    </ColorModeProvider>
  );
}

function App({ Component, pageProps }) {
  const context = React.useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
      <AddVideo />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <App {...props} />
    </ProviderWrapper>
  )
}
