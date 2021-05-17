import { GET_USER_ID } from '../constants/constants'

const user = (userId = null, action) => {
    switch (action.type) {
        case GET_USER_ID:
            return action.payLoad;
        default:
            return userId;
    }
}

export default user;