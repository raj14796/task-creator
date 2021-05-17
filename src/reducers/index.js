import { combineReducers } from 'redux'
import authReducer from './authReducer'
import singleTask from './getSingleTaskReducer'
import tasks from './taskReducer'
import user from './getUserId'
import editButton from './editButtonReducer'

export default combineReducers({
    authReducer,
    singleTask,
    tasks,
    user,
    editButton
})