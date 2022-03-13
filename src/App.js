import Cakecontainer from './Components/Cakecontainer'
import {Provider} from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './Components/HooksCakeContainer'
import IceCreamContainer from './Components/IceCreamContainer'
import NewCakecontainer from './Components/NewCakeContainer'
import ItemContaner from './Components/ItemContainer'
import NewiceCreamContainer from './Components/NewiceCreamContainer'
import Container from './Components/Container'
import './App.css'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <ItemContaner cake/>
    <ItemContaner/>
    <HooksCakeContainer/>
     <Cakecontainer/>
     <IceCreamContainer/>
     <NewCakecontainer/>
     <NewiceCreamContainer/>
     <Container/>
    </div>
    </Provider>
  );
}

export default App;
