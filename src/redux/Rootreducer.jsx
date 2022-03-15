import {combineReducers} from 'redux'


import UserReducer from './User/userReducer'
const Rootreducer = combineReducers({
    
    user:UserReducer
})

export default Rootreducer;