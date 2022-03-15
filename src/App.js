import { Provider } from "react-redux";
import store from "./redux/Store";

import Container from "./Components/Container";
import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
