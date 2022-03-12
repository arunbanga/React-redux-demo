import Cakecontainer from './Components/Cakecontainer'
import {Provider} from 'react-redux'
import store from './redux/Store'
import './App.css'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Cakecontainer/>
    </div>
    </Provider>
  );
}

export default App;
