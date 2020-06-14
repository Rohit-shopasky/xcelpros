import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getAllUserAction,deleteUserAction} from '../actions/index';
import {  Row, Col } from "shards-react";
import { Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter} from "shards-react";
import {DashboardStyle} from './styles/DashboardStyle';
import Sidebar from "react-sidebar";
import playStoreIcon from './assets/playstore.png'; 
import CalendarIcon from './assets/calendar.png';
import EditIcon from './assets/edit.png';
import Avatar from 'react-avatar';
import { MdCall, MdMail,MdDelete } from 'react-icons/md';




class Dashboard extends Component{

    state = {
        userList:[]
    }


    componentWillReceiveProps = (props)=>{
        
        let {allUserList,deleteUser} = props;
        if(allUserList.status==false){
            alert("Session Expired! Please login again.");
            window.location.assign("/");
        }
        if(deleteUser.status==false){
            alert("Session Expired! Please login again.");
            window.location.assign("/");
        }
        this.setState({userList:allUserList.data});

    } 


    componentDidMount = async() =>{
        let token = this.props.saveUser.token;
        if(token){
            console.log("token",token);
            let result = await this.props.getAllUserAction({token:token}); 
        }
        else{
            alert("Please login again.");
            window.location.assign("/");
        }
    }

    deleteUser =async (email)=>{
       
        let token = this.props.saveUser.token;
        if(token){
            var r = window.confirm("Are you sure!");
            if (r == true) {

              await this.props.deleteUserAction({token:token,email:email}); 
              let result = await this.props.getAllUserAction({token:token}); 
             
            }


        }
        else{
            alert("Please login again.");
            window.location.assign("/");
        }
      
       }
    
    render(){
        

         

        let {saveUser} = this.props;


        return(
              
        <Sidebar
        sidebar={<ul style={DashboardStyle.sideList}>
            
            <li ><img style={DashboardStyle.playIcon} src={playStoreIcon}/></li>
            <li style={DashboardStyle.sideListItem}><img style={DashboardStyle.normalIcons} src={CalendarIcon}/></li>

            <li style={DashboardStyle.sideListItem}><img style={DashboardStyle.normalIcons} src={EditIcon}/></li>

            <li style={DashboardStyle.sideListItem}><img style={DashboardStyle.normalIcons} src={CalendarIcon}/></li>

            <li style={DashboardStyle.sideListItem}><img style={DashboardStyle.normalIcons} src={EditIcon}/></li>
            <li  style={DashboardStyle.sideListItem}><img style={DashboardStyle.normalIcons} src={CalendarIcon}/></li>

            </ul>}
        docked={true}
        styles={{ sidebar: { background: "white" },overlay:{backgroundColor:"rgba(0,0,0,0)"} }} 
      >
             <div style={DashboardStyle.rootDiv}>
             <Row>
                 <Col>
                 <div style={DashboardStyle.topNav}>
                     <h4 style={DashboardStyle.dashboardHeading}>DASHBOARD</h4>
                     <Avatar style={DashboardStyle.mainAvt} round={true} size={50} name={saveUser.firstName + " " + saveUser.lastName} />
                 </div>
                 </Col>
             </Row>

              <Row>
                  <Col>
                    <div style={DashboardStyle.mainContent}>

                        {this.state.userList.map((item)=>{
                            return(
                                <Card  style={DashboardStyle.cardStyle}>
                                <CardHeader style={DashboardStyle.cardHeaderStyle}>
                                <MdDelete onClick={()=>this.deleteUser(item.email)} style={{float:"right",position:"relative"}} />

                                </CardHeader>
                                <CardImg  />
                                <CardBody>
                             <Avatar style={DashboardStyle.cardAvt} round={true} size={70} name={item.firstName +  " " + item.lastName} />
                            <CardTitle style={DashboardStyle.cardTitleStyle}>{item.firstName +  " " + item.lastName}</CardTitle>
                                <span style={DashboardStyle.admin}>Administrator</span>
                                </CardBody>
                            <CardFooter style={DashboardStyle.footer}>
                            <MdMail style={DashboardStyle.mailIcon} />
                        <span style={DashboardStyle.emailText}>{item.email}</span>
                             <br/>
                            <MdCall style={DashboardStyle.callIcon} />
                            <span style={DashboardStyle.callText}>+919783365925</span>
                            </CardFooter>
                            </Card>
                            )
                        })}

                   

        
                    </div>
                  
                  </Col>
              </Row>

             </div>
        
      </Sidebar>


            
        )
    }
}

const mapStateToProps = ({isLoading,images,error,saveTest,saveUser,allUserList,deleteUser}) =>({
  isLoading,
  images,
  error,
  saveTest,
  saveUser,
  allUserList,
  deleteUser
})

const mapDispatchToProps = (dispatch) =>({

 getAllUserAction :(data)  => dispatch(getAllUserAction(data)),
 deleteUserAction :(data)  => dispatch(deleteUserAction(data)),
 
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);