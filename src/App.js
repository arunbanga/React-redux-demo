import Cakecontainer from './Components/Cakecontainer'
import {Provider} from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import './App.css'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <HooksCakeContainer/>
     <Cakecontainer/>
     <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
