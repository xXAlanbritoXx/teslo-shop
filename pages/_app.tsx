import type { AppProps } from "next/app";
import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme } from "@/themes";
import { SWRConfig } from "swr";
import { UiProvider } from "@/context";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SWRConfig
      value={{
        refreshInterval: 500,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <UiProvider isMenuOpen>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UiProvider>
    </SWRConfig>
  );
}

export default dynamic (() => Promise.resolve(MyApp), {ssr: false})