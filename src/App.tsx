import "./App.css";
import { GlobalStyle } from "./global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RoutesMain from "./routes";
import React from "react";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;
