import {ACT} from '../constants/index';




const signupUserAction = (data) =>({
    type:ACT.SIGNUP_USER,
    data
})

const saveUserAction = (data) =>({
    type:ACT.SAVE_USER,
    data
})

const loginUserAction = (data)=>({
    type:ACT.LOGIN_USER,
    data
})

const getAllUserAction = (data)=>({
    type:ACT.GET_ALL_USER,
    data
})


const allUserListAction = (data)=>({
    type:ACT.ALL_USER_LIST,
    data
})

const deleteUserAction = (data)=>({
    type:ACT.DELETE_USER_ACTION,
    data
})




export {signupUserAction,saveUserAction,loginUserAction,getAllUserAction,allUserListAction,deleteUserAction};
