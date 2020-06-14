import {ACT} from '../constants/index';

const getAllUserReducer = (state='',action) =>{

    if(action.type===ACT.GET_ALL_USER)
    {
        //console.log("loginData",action.data);
        return action.data;
    }
    return state;

}

export default getAllUserReducer;