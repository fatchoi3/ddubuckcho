import React from "react";
import "../App.css"
import { useSelector,useDispatch } from "react-redux";

import { history } from "../redux/configureStore";

import Post from "../components/Post";
import LikePostList from "../components/LikePostList";
import DatePostList from "../components/DatePostList";
import Spinner from "../elements/Spinner";
const MainPage = ()=>{
    const test = useSelector(state => state.user);
    console.log("test",test)
    const is_token = localStorage.getItem("token")?true:false;
    // const _is_token = count?true:false;
    // const is_loading =useSelector((state)=>state.post.is_loading)
    // const paging = useSelector((state)=>state.post.paging)
   
    return(
        <div>
            {/* {(is_loading&&!paging.next)&&(<Spinner type={'page'} is_dim={true}/>)} */}
            안녕 난 MainPage야
            <LikePostList />
            <DatePostList />
            {is_token?
            <button className="writeButton" onClick={()=>{history.push("/write")}}>글 작성</button>
        :""}
        </div>
    )
}
export default MainPage;