import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Routes from "./config/Routes";
import store from "./config/Redux/store";

function App() {
  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const timeout = setTimeout(() => {
        localStorage.clear();
        window.location.href = "/login";
      }, 60 * 60 * 1000);
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
