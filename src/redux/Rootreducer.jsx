import {combineReducers} from 'redux'
import cakeReducer from './Cake/CakeReducer'
import IceCreamReducer from './IceCream.jsx/IceCreamReducer'

const Rootreducer = combineReducers({
    cake:cakeReducer,
    iceCream:IceCreamReducer,
})

export default Rootreducer;