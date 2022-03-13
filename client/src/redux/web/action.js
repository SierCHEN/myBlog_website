import * as api from '../../utils/axios';
import * as TYPES from '../types';

export const getBlogs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogs();
        dispatch({
            type: TYPES.FETCH_ALL,
            payload: data
        });
    } catch (error) {
        console.log(error);
    }
}

export const createBlogs = (blog) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blog);
        dispatch({
            type: TYPES.CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {
    try {
        const { data } = await api.updateBlog(id, blog);
        dispatch({
            type: TYPES.UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id);
        dispatch({
            type: TYPES.DELETE,
            payload: id
        })
    } catch (error) {

    }
}

export const likeBlog = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeBlog(id);
        dispatch({
            type: TYPES.LIKE,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export const setCurrentId = (id) => async (dispatch) => {
    try {
        dispatch({
            type: TYPES.SETCURRENTID,
            payload: id
        })
    } catch (error) {
        console.log(error);
    }
}

