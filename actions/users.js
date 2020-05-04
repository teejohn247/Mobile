import axios from 'axios';
import { FETCH_USERS } from "./types";

export const getPosts = () => async dispatch => {
    const res = await axios.get('https://randomuser.me/api/?results=10');
    try{
    dispatch({
        type: GET_POSTS,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: POST_ERROR,
        payload:{ status: err.response.status}
    })
}
}
