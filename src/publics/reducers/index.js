import { combineReducers } from 'redux'
import todolist from './todolist';

//import all reducers


//combine them
const appReducer = combineReducers({
    todolist
})

export default appReducer
