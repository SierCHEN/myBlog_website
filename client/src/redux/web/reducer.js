import * as TYPES from '../types'

const defaultState = {
    blogs: [],
    currentId: null,
}

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPES.FETCH_ALL:
            return { ...state, blogs: payload };
        case TYPES.CREATE:
            return { ...state, blogs: payload };
        case TYPES.UPDATE:
        case TYPES.LIKE:
            return state.blogs.map((item) => item._id === payload._id ? payload : item);
        case TYPES.DELETE:
            return state.blogs.filter((item) => item._id !== payload);
        case TYPES.SETCURRENTID:
            return { ...state, currentId: payload };
        default:
            return state;
    }
}