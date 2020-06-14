import {ACT} from '../constants/index';

const loginReducer = (state='',action) =>{

    if(action.type===ACT.LOGIN_USER)
    {
        console.log("loginReducerData",action.data);
        return action.data;
    }
    return state;

}

export default loginReducer;