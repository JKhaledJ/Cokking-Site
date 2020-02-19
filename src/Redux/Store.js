import {createStore} from 'redux'
import LoginCheckReducer from './Reducer'
const Store=createStore(LoginCheckReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store;