import * as TYPES from '../types'

const defaultState = {
    authData: null
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case TYPES.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
            return { ...state, authData: action?.payload }
        case TYPES.LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state;
    }
}