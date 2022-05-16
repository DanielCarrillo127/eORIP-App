import React from "react";
// import './App.css';
// import "@duik/it/dist/styles.css";
import GlobalStyle from "./GlobalStyle";
import { RoutesTree } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesTree />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
