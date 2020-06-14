const userModel = require("./model");
const jwt = require('jsonwebtoken');
const jwtSecret = "@test@";
const moment = require("moment");
//var cron = require('node-cron');

const Auth = {

    signup: async(req,res)=>{
         let {firstName,lastName,email,password} = req.body;
         try {

            let userRef = userModel();
            userRef.firstName = firstName;
            userRef.lastName = lastName;
            userRef.email = email;
            userRef.password = password;
            let token = jwt.sign({ val:userRef.email},jwtSecret);
            userRef.token = token
            console.log(token);
            
            // search User
            let isUserExists = await userModel.findOne({email:userRef.email});
            if(isUserExists===null)
            {
              let result = await userModel.collection.insert(userRef);
              res.json({status:true,msg:"User Inserted",token:token,firstName:firstName,lastName:lastName}) 
            }
            else
            res.json({status:false,msg:"User Already exists. Try SignIn",token:""}) 
            } catch (error) {
              console.log("error",error);
              res.json({status:false,msg:"Error",token:""}) 
            }
    },


    login: async(req,res)=>{
        let {email,password} = req.body;
        try {
            let result = await userModel.findOne({email:email,password:password});
            if(result)
            {
              console.log("came");
               let token = jwt.sign({ val:email},jwtSecret);
               let result = await userModel.findOneAndUpdate({email:email},{$set:{token:token,loginAt:new Date()}});
               console.log("result",result);
               res.json({status:true,msg:"ok",token:token,msg:"",firstName:result.firstName,lastName:result.lastName});
            }
            else
              res.json ({status:false,msg:"Email or password is incorrect!",token:""})
            
          } catch (error) {
            console.log("error",error);
          }
    }

}

module.exports = Auth;