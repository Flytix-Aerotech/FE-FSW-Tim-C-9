import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Routes from "./config/Routes";
import store from "./config/Redux/store";

function App() {
  React.useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Set a timeout to automatically delete the token after a specific duration
      const timeout = setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("totalPassenger");
        window.location.href = "/login";
      }, 60 * 60 * 1000); // 1 hour in milliseconds

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, []);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
