import {ACT} from '../constants/index';

const saveUserReducer = (state='',action) =>{

    if(action.type===ACT.SAVE_USER)
    {
        //console.log("saveUser",action.data);
        return action.data;
    }
    return state;

}

export default saveUserReducer;