import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

import "react-quill/dist/quill.snow.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import "../styles/navbar.css";
import "../styles/globals.css";
import store from "../redux/store.js"
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Head>
        <title>TempTemari</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </PersistGate>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
