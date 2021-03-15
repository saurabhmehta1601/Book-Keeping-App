import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { createBookReducer } from '../reducers/books/createBookReducer'
import { bookListReducer } from '../reducers/books/bookListReducer'
import {userAuthReducer} from '../reducers/user/userAuthReducer'

const middlewares = [thunk]

const reducer=combineReducers({
    bookCreated: createBookReducer,
    booksList:bookListReducer,
    userLogin: userAuthReducer

})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middlewares)))

export {store}