import {take,put,call,takeEvery} from 'redux-saga/effects';
import {requestApi} from '../apis/requestApi';
import {saveUserAction,allUserListAction} from '../actions/index'


function* signupUser(data){
    try {
 
     let params = {requestType:"post",params:data.data,endPoint:"/signup"}
     let response= yield call(requestApi,params);
      yield put(saveUserAction(response));  

    } catch (error) {
        console.log("error",error);
    }
 }

 function* loginUser(data){
   try {

    let params = {requestType:"post",params:data.data,endPoint:"/login"}
    let response= yield call(requestApi,params);
    console.log("response login",response);
     yield put(saveUserAction(response));  

   } catch (error) {
       console.log("error",error);
   }
}

function* getAllUser(data){
  try {

   let params = {requestType:"post",params:data.data,endPoint:"/getAllUsers"}
   let response= yield call(requestApi,params);
   console.log("response getAllUser",response);
    yield put(allUserListAction(response));  

  } catch (error) {
      console.log("error",error);
  }
}

function* deleteUser(data){
  try {

   let params = {requestType:"post",params:data.data,endPoint:"/deleteUser"}
   let response= yield call(requestApi,params);
   console.log("response deleteUser",response);
    // yield put(allUserListAction(response));  

  } catch (error) {
      console.log("error",error);
  }
}


// watcher saga
function* rootSaga(){

   yield takeEvery("SIGNUP_USER",signupUser)
   yield takeEvery("LOGIN_USER",loginUser)
   yield takeEvery("GET_ALL_USER",getAllUser)
   yield takeEvery("DELETE_USER_ACTION",deleteUser)
}


export default rootSaga;