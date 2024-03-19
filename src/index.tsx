import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/home/home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import '@vkontakte/vkui/dist/vkui.css';
import "./styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
