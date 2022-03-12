import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

import Rootreducer from './Rootreducer'
const store= createStore(Rootreducer,applyMiddleware(logger))

export default store