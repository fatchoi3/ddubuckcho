import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Like from "../elements/Like";

import '../App.css';

import { actionCreators } from "../redux/modules/post";

const Post =(props)=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.user);
    //console.log(user_id)
    const test= useSelector((state)=>state.post.list)
    const post_like_id_list = useSelector((state)=>state.post.list)
    const [like, setLike] = useState(false)
    const [Heart,setHeart]= useState(post_like_id_list.length)
    const name = localStorage.getItem("name");
    
    console.log("post_like_id_list",post_like_id_list)
    const {
        title,
        thumbnail,
        // like,
        // like_count,
        is_like,
        postId,
    } = props;

    

//     useEffect(() => {
//        setHeart(post_like_id_list.length)
//        let is_like =false
//    post_like_id_list.map((c,idx)=>{
//       if(c===user_id.uid){
//        is_like =true;
//           return
//       }
//   })
//        setLike(is_like?is_like:false)
//    }, [post_like_id_list.length])

    
    const toggleLike = () => {
    //     if (!is_login&&!is_login2) {
    //         window.alert("로그인 해주세욥!")
    //       return;
    //    }
       setLike(!like)
       dispatch(actionCreators.LikeDB(props.id, name));    
   }
    return(
        <React.Fragment>
            <div className="postCard">
                <div className="postImage"
                    onClick={() => {
                        history.push(`/detail/${props._id}`);
                    }}>
                    <img src={"http://3.35.233.188/"+thumbnail} alt="썸네일" />
                </div>
                <div className="postFooter">
                    <p className="postTitle">{title}</p>
                    
            <Like like={like} onClick={toggleLike} />
            </div>
            </div>
        </React.Fragment>
    )
};

export default Post;