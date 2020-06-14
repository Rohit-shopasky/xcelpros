import {ACT} from '../constants/index';

const signupReducer = (state='',action) =>{

    if(action.type===ACT.SIGNUP_USER)
    {
        //console.log("signupReducerData",action.data);
        return action.data;
    }
    return state;

}

export default signupReducer;