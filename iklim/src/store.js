import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducers from './Model'

const middlewares = applyMiddleware(thunk)
const store = createStore(rootReducers,middlewares)

export default store
