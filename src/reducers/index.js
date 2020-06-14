import {combineReducers} from 'redux';


import signupReducer from './signupReducer';
import saveUserReducer from './saveUserReducer';
import loginUserReducer from './loginReducer';
import getAllUserReducer from './getAllUserReducer';
import allUserListReducer from './allUserListReducer';
import deleteUserReducer from './deleteUserReducer';

const rootReducer = combineReducers({
    
    signup:    signupReducer,
    saveUser:  saveUserReducer,
    login:     loginUserReducer,
    getAllUser:getAllUserReducer,
    allUserList:allUserListReducer,
    deleteUser: deleteUserReducer,
})

export default rootReducer;


