import React from "react";
import "../App.css"
import { useSelector, useDispatch} from "react-redux";
import {history} from "../redux/configureStore";
import { RESP } from "../response/response";
import { actionCreators } from "../redux/modules/user";
const Header =() =>{
   
    const dispatch = useDispatch();
    const is_token = localStorage.getItem("token")?true:false;
    console.log(is_token)
    const logout =()=>{
        dispatch(actionCreators.logOut({}))
    }
   if(is_token){
       return(
           <div className="Header">
               <div >
                안녕 나는 사진이야
            <img src=""/>
            </div>
            <p>뚜벅초가 뚜벅뚜벅</p>
            <div>
                <button onClick={()=>{
                    history.push("/")
                }}>홈</button>
                <button 
                onClick={logout}
                >로그아웃</button>
            </div>
           </div>
       )
   }
    return(
        <div className="Header">
            <div>
            안녕나는 사진이야
            <img src=""/>
            </div>
            <p>뚜벅초가 뚜벅뚜벅</p>
            <div>
                <button onClick={()=>{
                    history.push("/")
                }}>홈</button>
                <button onClick={()=>{
                    history.push("/login")
                }}>로그인</button>
                <button onClick={()=>{
                    history.push("/signup")
                }}>회원가입</button>
            </div>
        </div>
    )
}

export default Header