import baseUrl from './api';
import axios from 'axios';

export const requestApi = async(args) =>{
    let data;
    let {requestType,params,endPoint} = args;
    console.log(args);
    try {
         if(requestType=="get")
         {
             data = await axios.get(baseUrl + endPoint);
         }
         else if(requestType=="post")
         {
             data = await axios.post(baseUrl + endPoint,params)
         }
         return data.data;
        
    } catch (error) {

        console.log("error",error);
        return error
    }

}
