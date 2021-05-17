import { AUTH } from '../constants/constants'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payLoad }));
            return { ...state, authData: action?.payLoad }
        default:
            return state;
    }
}

export default authReducer;