import { GET_SINGLE_TASK } from "../constants/constants"

const singleTask = (state=null,action) => {
    switch(action.type){
        case GET_SINGLE_TASK : return action.payLoad;
        default: return state;
    }
}

export default singleTask;