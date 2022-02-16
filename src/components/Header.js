import React from "react";
import "../App.css"
import { useSelector, useDispatch} from "react-redux";
import {history} from "../redux/configureStore";
import { RESP } from "../response/response";
import { actionCreators } from "../redux/modules/user";

import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
const Header =() =>{
   
    const dispatch = useDispatch();
    const is_token = localStorage.getItem("token")?true:false;
    console.log("is_token",is_token)
    const logout =()=>{
        dispatch(actionCreators.logOut({}))
    }
   if(is_token){
       return(
        <div className="Header">
        <div className="HeaderImage">
         LOGO
     </div>
     <p>DDU BUCK CHOO</p>
     <div className="logoutBar">
     <HomeIcon className="homeIcon"
   onClick={()=>{
     history.push("/");
   }}
   style={{ 
     color: "white", 
     fontSize: "30px", 
     }} 
     />
         <button className="logoutButton"
         onClick={logout}
         >로그아웃</button>
     </div>
    </div>
)
}
return(
 <div className="Header">
     <div>
     LOGO
     <img src=""/>
     </div>
     <p className="login_HdTitle">DDU BUCK CHOO</p>
     <div>
         
     
     <HomeIcon className="loginHomeIcon"
   onClick={()=>{
     history.push("/");
   }}
   style={{ 
     color: "white", 
     fontSize: "30px", 
     }} 
     />
         <button className="loginButton"
         onClick={()=>{
             history.push("/login")
         }}>로그인</button>
         <button className="signupButton" onClick={()=>{
             history.push("/signup")
         }}>회원가입</button>
         </div>
         </div>
    
)
}

export default Header