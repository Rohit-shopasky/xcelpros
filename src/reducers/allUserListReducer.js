import {ACT} from '../constants/index';

const allUserListReducer = (state='',action) =>{

    if(action.type===ACT.ALL_USER_LIST)
    {
        //console.log("loginData",action.data);
        return action.data;
    }
    return state;

}

export default allUserListReducer;