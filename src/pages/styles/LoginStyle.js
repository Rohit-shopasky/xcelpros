import leftImage from '../assets/leftImage.jpg';

export  const LoginStyle = {
    leftDiv:{
      width:"100%",
      height:"826px",
      backgroundImage:`url(${leftImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
      backgroundPosition: "center right",
      backgroundAttachment: "fixed",
    },

    rightDiv:{
        width:"482px",
        height:"430px",
        //border:"1px solid gray",
        position:"relative",
        top:"203px",
        left:"100px"
    },

    loginHead:{
        color:"#007BFF"
    },

    signupText:{
        color:"gray",
        fontSize:"14px",
        //fontWeight:"bold"
    },
    signupLink:{
        color:"black",
        fontSize:"14px",
        //fontWeight:"bold"

    },
    labels:{
        float:"left",
        fontSize:"14px",
        color:"gray"
    },

    submitButton:{
        width:"482px",
        fontSize:"12px",
        fontWeight:"bold"
    },

    errorLabel:{
       color:"red",
       fontSize:"10px",
       position:"relative",
       float:"left",
       bottom:"-3px",
       left:"5px"
    },
    faces:{
        width:"15px",
        height:"15px",
        float:"right",
        position:"relative",
        bottom:"-4px"
    }
}