import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./context/UserStore";
import { Provider } from "react-redux";
import { store } from "./store/store";

//Create A root entry point
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <UserStore>
        
      <App />
    </UserStore>
    </Provider>
  </BrowserRouter>
);