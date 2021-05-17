import { EDIT_BUTTON } from '../constants/constants'

export const setEditButton = (boolean1) => {
    return { type: EDIT_BUTTON, payLoad: boolean1 }
}