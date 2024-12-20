import RouteComponent from "./Route/route";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  );
}

export default App;
