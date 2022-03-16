import {combineReducers} from 'redux'
import Deleteusers from './User/userReducer'

import UserReducer from './User/userReducer'
const Rootreducer = combineReducers({
    
    user:UserReducer,
    delete:Deleteusers
})

export default Rootreducer;