import { Provider } from "react-redux";
import { store } from "../state";
import { RespositoriesList } from "./RespositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for a Package</h1>
        <RespositoriesList />
      </div>
    </Provider>
  );
};

export default App;
