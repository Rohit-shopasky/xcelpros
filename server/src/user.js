const userModel = require("./model");
const jwt = require('jsonwebtoken');
const jwtSecret = "@test@";
const moment = require("moment");
var cron = require('node-cron');
cron.schedule('* * * * *', () => {
  let date = moment().subtract(1, 'minutes').utc().format();

let data = userModel.find({}).then((resp)=>{
  
      resp.map((item)=>{
        let loginAt = item.loginAt;
        loginAt = loginAt.toISOString();
        console.log("actual",loginAt)
        let comp = moment(loginAt).add(1, 'minutes').utc().format();
        console.log("1 min fast",comp);
        let current = new Date().toISOString();
        console.log("current",current);


        if(current>=comp)
        {
            userModel.findOneAndUpdate({email:item.email},{$set:{token:""}}).then((up)=>{
console.log("up",up);
           });
          
        }
      
      })
})
});


const User = {


    getAllUsers: async(req,res) =>{
        let {token} = req.body;
        try {
    
          let  check = await checkToken(token);
         
          if(check.status==true)
          {
            let data = await userModel.find({}).sort({"_id":-1}).lean();
            data.map((item)=>{
               item.status= true
               item.msg = ""
            })
            res.json({status:true,data:data})
          }
          else{
              res.json({status:false,data:[],msg:"Token error"})
          }
          
          
        } catch (error) {
          console.log("error",error);
          res.json({status:false,data:[],msg:"Something went wrong!"});
          
        }
      },


      deleteUser:async (req,res) =>{
        try {
  
          let {token,email} = req.body;
          let check = await checkToken(token)
  
          if(check.status==true)
          {
            let result =await  userModel.findOneAndDelete({email:email});
            console.log(result);
            res.json({status:true,msg:"User deleted"});
          }
          else
          res.json( {status:false,msg:"Token Expired"})
          
        } catch (error) {
          console.log("error",error);
          res.json ({status:false,msg:"Error"})
        }
    },

}

async function checkToken(token){
    let userData = await userModel.findOne({token:token}).lean();
    if(userData===null)
    return {status:false,msg:"Token err",data:""}
    else
    return {status:true,msg:"",data:userData}
  }

module.exports = User;