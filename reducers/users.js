import { FETCH_USERS, POST_ERROR } from '../actions/types';

const initialState = {
    user: null,
    users: [],
    loading:true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case FETCH_USERS:
        return {
            ...state,
            users: payload,
            loading: false
        }
        
        case POST_ERROR:
        return {
            ...state,
            // profile: payload,
            loading: false
        }
        default:
        return state;
    }
   
}