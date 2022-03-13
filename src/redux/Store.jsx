import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import Rootreducer from './Rootreducer'
const store= createStore(Rootreducer,applyMiddleware(logger,thunk))

export default store