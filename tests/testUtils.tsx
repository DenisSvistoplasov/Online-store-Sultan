import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { App } from "../src/App";
import { BreakpointProvider } from "../src/context/BreakpointContext";
import { store } from "../src/store/store";

export function AllProviders({children}:{children:React.ReactNode}) {
  return (
    <HashRouter>
    <Provider store={store}>
      <BreakpointProvider>
        {children}
      </BreakpointProvider>
    </Provider>
  </HashRouter>
  )
}