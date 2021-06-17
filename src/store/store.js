import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import { authReducer } from '../reducers/authReducer'
import {registro} from '../reducers/uiReducer'
// import {registro} from '../reducers/uiReducer'
import thunk from 'redux-thunk'
// import {userReducer} from '../reducers/userReducer'

const reducers = combineReducers({
    auth: authReducer,
    error: registro
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)
