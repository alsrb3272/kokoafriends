import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import client from "./client";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
