import {GET_USER_ID} from '../constants/constants'
import * as api from '../api/api'

export const getUser = () => async (dispatch) => {
    try {
        const { data } = await api.getUser();
        dispatch({
            type: GET_USER_ID,
            payLoad: data.results
        })
    } catch (error) {
        console.log(error);
    }
}
