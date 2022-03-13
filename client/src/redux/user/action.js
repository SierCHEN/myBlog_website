import * as api from '../../utils/axios';
import * as TYPES from '../types';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({
            type: TYPES.AUTH,
            payload: data
        });
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, setIsSignUp) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({
            type: TYPES.AUTH,
            payload: data
        });
        setIsSignUp(false);
    } catch (error) {
        console.log(error)
    }
}