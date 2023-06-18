import { Provider } from "react-redux";
import "./App.css";
import Routes from "./config/Routes";
import store from "./config/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
