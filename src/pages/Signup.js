import React,{Component} from 'react';
import {connect} from 'react-redux';
import {signupUserAction,saveUserAction} from '../actions/index';
import {  Row, Col } from "shards-react";
import {LoginStyle} from './styles/LoginStyle';
import { FormInput } from "shards-react";
import { Button } from "shards-react";
import green from '../pages/assets/green.png'
import red from '../pages/assets/red.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Signup extends Component{

    state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',

        firstNameError:{
            msg:'',
            status:false,
            display:"none"
        },
        lastNameError:{
            msg:'',
            status:false,
            display:"none"
        },
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
        if(entityType=="firstName")
        {
            this.setState({firstName:val});
            this.setState({firstNameError:{msg:'',display:"",status:val.length>0 ?true:false }});
    
        }


        if(entityType=="lastName"){
           this.setState({lastName:val});
           this.setState({lastNameError:{msg:'',display:"",status:val.length>0 ?true:false}});
        }
   
        else if(entityType=="email"){
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
        const test =() =>{
            this.props.testAction({data:1});
        }

       const submit = async()=>{
            let {firstNameError,lastNameError,emailError,passwordError,firstName,lastName,email,password} = this.state;

             if(firstName==""){
                this.setState({firstNameError:{msg:"can't be blank",display:"",status:false}});    
             }
             if(lastName==""){
                this.setState({lastNameError:{msg:"can't be blank",display:"",status:false}});    
             }
             if(email==""){
                this.setState({emailError:{msg:"can't be blank",display:"",status:false}});    
             }
             if(password==""){
                this.setState({passwordError:{msg:"can't be blank",display:"",status:false}});    
             }


            if(firstNameError.status==true && lastNameError.status==true && emailError.status==true && passwordError.status==true){
             let result = await this.props.signupUserAction({firstName:firstName,lastName:lastName,email:email,password:password});
            }

        }

        let {firstNameError,lastNameError,emailError,passwordError,firstName,lastName,email,password}= this.state;

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
                       <h3 style={LoginStyle.loginHead}>Sign-up</h3>
                   </center>
                   <center>
                       <span style={LoginStyle.signupText}>Already have an account? <a style={LoginStyle.signupLink} component={Link} to="/" href="/">Login</a></span>
                   </center>
                   <br/>
                   <Row>
                       <Col sm="6" lg="6">


                            <label style={LoginStyle.labels} for="name">First Name</label>
                             <label style={LoginStyle.errorLabel} for="name">{firstNameError.msg}</label>
                            <img style={{...LoginStyle.faces,display:firstNameError.display}}  src={firstNameError.status==true ? green:red}></img>
                            <FormInput id="name" onChange={(e)=>this.handleChange(e.target.value,"firstName")} type="text" placeholder="" className="mb-2" /> 
                       </Col>


                       <Col sm="6" lg="6">
                       <label style={LoginStyle.labels} for="lastname">Last Name</label>
                             <label style={LoginStyle.errorLabel} for="name">{lastNameError.msg}</label>

                            <img style={{...LoginStyle.faces,display:lastNameError.display}} src={lastNameError.status==true ? green:red}></img>

                            <FormInput onChange={(e)=>this.handleChange(e.target.value,"lastName")} id="lastname" type="text" placeholder="" className="mb-2" />
                       </Col>

                   </Row>

                            <label style={LoginStyle.labels} for="email">Email Address</label>
                            <label style={LoginStyle.errorLabel} for="name">{emailError.msg}</label>

                            <img style={{...LoginStyle.faces,display:emailError.display}} src={emailError.status==true ? green:red}></img>

                            <FormInput onChange={(e)=>this.handleChange(e.target.value,"email")} id="email" type="email" placeholder="" className="mb-2" />


                            <label style={LoginStyle.labels} for="password">Password</label>
                            <label style={LoginStyle.errorLabel} for="name">{passwordError.msg}</label>

                            <img style={{...LoginStyle.faces,display:passwordError.display}} src={passwordError.status==true ? green:red}></img>
                   <FormInput onChange={(e)=>this.handleChange(e.target.value,"password")} id="password" type="password" placeholder="" className="mb-2" />  

                    <br/>
                   <Button onClick={submit} style={LoginStyle.submitButton} size="lg" theme="success">Join our community</Button> 

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
 signupUserAction: (data) => dispatch(signupUserAction(data)),
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);