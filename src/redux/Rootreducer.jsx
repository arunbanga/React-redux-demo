import {combineReducers} from 'redux'
import cakeReducer from './Cake/CakeReducer'
import IceCreamReducer from './IceCream.jsx/IceCreamReducer'
import UserReducer from './User/userReducer'
const Rootreducer = combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
    user:UserReducer
})

export default Rootreducer;