import { ADD_TASK, GET_ALL_TASK, UPDATE_TASK, DELETE_TASK } from '../constants/constants'

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK: return [...state,action.payLoad];
        case GET_ALL_TASK: return action.payLoad;
        case UPDATE_TASK: return state.map((aTask)=>aTask.id===action.payLoad.id?action.payLoad:aTask);
        case DELETE_TASK: return state.filter((aTask)=>aTask.id!==action.payLoad.taskId);
        default: return state;
    }
}

export default tasks;