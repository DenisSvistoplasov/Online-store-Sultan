const {App} = require("./App");
import ReactDOM from 'react-dom/client';
import { BreakpointProvider } from "./context/BreakpointContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { HashRouter } from "react-router-dom";
import './assets/img/favicon.svg';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Provider store={store}>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </Provider>
  </HashRouter>
);