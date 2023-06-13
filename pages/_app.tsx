import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "react-quill/dist/quill.snow.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import "../styles/navbar.css";
import "../styles/globals.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>TempTemari</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
