import { EDIT_BUTTON } from '../constants/constants'

const editButton = (state=false,action) => {
    switch(action.type){
        case EDIT_BUTTON : return action.payLoad;
        default : return state;
    }
}

export default editButton;