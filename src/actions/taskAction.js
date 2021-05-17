import { ADD_TASK, GET_ALL_TASK, GET_SINGLE_TASK, UPDATE_TASK, DELETE_TASK } from '../constants/constants'
import * as api from '../api/api'

export const addTask = (formData) => async (dispatch) => {
    try {
        const { data } = await api.addTask(formData);
        dispatch({
            type: ADD_TASK,
            payLoad: data.results
        })
    } catch (error) {
        console.log(error)
    }
}
export const getAllTask = () => async (dispatch) => {
    try {
        const { data } = await api.getAllTask();
        dispatch({
            type: GET_ALL_TASK,
            payLoad: data.results
        })
    } catch (error) {
        console.log(error)
    }
}
export const getSingleTask = (taskId) => async (dispatch) => {
    try {
        const { data } = await api.getSingleTask(taskId);
        dispatch({
            type: GET_SINGLE_TASK,
            payLoad: data.results
        })
    } catch (error) {
        console.log(error)
    }
}
export const updateTask = (taskId, formData) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(taskId, formData);
        dispatch({
            type: UPDATE_TASK,
            payLoad: data.results
        })
    } catch (error) {
        console.log(error)
    }
}
export const deleteTask = (taskId) => async (dispatch) => {
    try {
        const { data } = await api.deleteTask(taskId);
        dispatch({
            type: DELETE_TASK,
            payLoad: {
                taskId,
                message: data.message
            }
        })
    } catch (error) {
        console.log(error)
    }
}