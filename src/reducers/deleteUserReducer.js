import {ACT} from '../constants/index';

const deleteUserReducer = (state='',action) =>{

    if(action.type===ACT.DELETE_USER_ACTION)
    {
        //console.log("loginData",action.data);
        return action.data;
    }
    return state;

}

export default deleteUserReducer;