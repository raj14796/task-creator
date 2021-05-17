import { AUTH } from '../constants/constants'
import * as api from '../api/api';

export const login = (loginData) => async (dispatch) => {
    try {
        const { data } = await api.login(loginData);
        dispatch({
            type: AUTH,
            payLoad: data.results
        })
    } catch (error) {
        console.log(error);
    }
}

