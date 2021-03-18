import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { createBookReducer } from '../reducers/books/createBookReducer'
import { bookListReducer } from '../reducers/books/bookListReducer'
import {userAuthReducer} from '../reducers/user/userAuthReducer'
import {userProfileReducer} from '../reducers/user/userProfileReducer'


const middlewares = [thunk]

const reducer=combineReducers({
    bookCreated: createBookReducer,
    booksList:bookListReducer,
    userLogin: userAuthReducer, //for login and register
    userProfile:userProfileReducer
})

// Get user from localStorage and storing in  state

const userAuthFromStorage= localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData') ) : null;

const initialState={
    userLogin: {
        userInfo:userAuthFromStorage
    }
}

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlewares)))

export {store}