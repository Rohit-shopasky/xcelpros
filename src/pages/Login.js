import React,{Component} from 'react';
import {connect} from 'react-redux';
import {loginUserAction} from '../actions/index';
import { bindActionCreators } from "redux";
import {  Row, Col } from "shards-react";
import {LoginStyle} from './styles/LoginStyle';
import { FormInput } from "shards-react";
import { Button } from "shards-react";
import green from '../pages/assets/green.png'
import red from '../pages/assets/red.png';



  


class Login extends Component{

    state={
        email:'',
        password:'',
        emailError:{
            msg:'',
            status:false,
            display:"none"
        },
        passwordError:{
            msg:'',
            status:false,
            display:"none"
        }
    }


    handleChange = (val,entityType) =>{
        
        if(entityType=="email"){
            this.setState({email:val});
            this.setState({emailError:{msg:'',display:"",status:val.length>0 ?true:false}});    
        }
   
        else if(entityType=="password"){
          this.setState({password:val})
          this.setState({passwordError:{msg:'',display:"",status:val.length>0 ?true:false}});    
           
        }
     }

     componentWillReceiveProps = (props)=>{
        let {saveUser} = props;
        if(saveUser.status==false){
           alert(saveUser.msg);
        }
        else{
            window.location.assign("/dashboard");
        }
    } 
    
    render(){
        let {email,password,emailError,passwordError} = this.state;
        const test =() =>{
            this.props.testAction({data:1});
        }

 
        const submit = async()=>{
            let {emailError,passwordError,email,password} = this.state;

             
             if(email==""){
                this.setState({emailError:{msg:"can't be blank",display:"",status:false}});    
             }
             if(password==""){
                this.setState({passwordError:{msg:"can't be blank",display:"",status:false}});    
             }


            if( emailError.status==true && passwordError.status==true){
             let result = await this.props.loginUserAction({email:email,password:password});
            }

        }


        return(
             <div style={{overflowX:"hidden"}}>
            <Row>
              <Col sm="6" lg="6">
               <div style={LoginStyle.leftDiv}>
               </div>
              </Col>
              <Col sm="6" lg="6">
                <div style={LoginStyle.rightDiv}>

                   <center>
                       <h3 style={LoginStyle.loginHead}>Login</h3>
                   </center>
                   <center>
                       <span style={LoginStyle.signupText}>Don't have an account? <a style={LoginStyle.signupLink} href="/signup">Sign up</a></span>
                   </center>
                   <br/>
                   <label style={LoginStyle.labels} for="email">Email Address</label>
        <label style={LoginStyle.errorLabel} for="name">{emailError.msg}</label>
                   <img style={{...LoginStyle.faces,display:emailError.display}} src={emailError.status==true ? green:red}></img>
                   <FormInput  onChange={(e)=>this.handleChange(e.target.value,"email")}  id="email" type="email" placeholder="" className="mb-2" />

                   <label style={LoginStyle.labels} for="password">Password</label>
        <label style={LoginStyle.errorLabel} for="name">{passwordError.msg}</label>
                    <img style={{...LoginStyle.faces,display:passwordError.display}} src={passwordError.status==true ? green:red}></img>
                   <FormInput onChange={(e)=>this.handleChange(e.target.value,"password")} id="password" type="password" placeholder="" className="mb-2" />  

                    <br/>
                   <Button onClick={submit} style={LoginStyle.submitButton} size="lg" theme="success">Login our community</Button> 

                   <br/>
                   <br/>
                   <span style={LoginStyle.signupText}>By joining, you agree to the <a style={LoginStyle.signupLink} href="#">Terms</a> and <a style={LoginStyle.signupLink} href="#">Privacy Policy</a></span>
                </div>
              </Col>
            </Row>
    
            
            </div>
        )
    }
}

const mapStateToProps = ({isLoading,images,error,saveTest,saveUser}) =>({
  isLoading,
  images,
  error,
  saveTest,
  saveUser
})

const mapDispatchToProps = (dispatch) =>({
 loginUserAction :(data)  => dispatch(loginUserAction(data)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);