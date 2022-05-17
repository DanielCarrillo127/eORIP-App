import React from "react";
// import './App.css';
import GlobalStyle from "./GlobalStyle";
import { RoutesTree } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./utils/userContext";
function App() {
  return (
    <>
      <UserContext>
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
      </UserContext>
    </>
  );
}

export default App;
