import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Like from "../elements/Like";

import { actionCreators } from "../redux/modules/post";

function LikePost(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.user);
    const post_id = useSelector((state) => state.post)
    const post_like_id_list = useSelector((state) => state)
    const [like, setLike] = useState(false)
    const [Heart, setHeart] = useState(post_like_id_list.length)
    const token = localStorage.getItem("token");


    const {
        title,
        // thumbnail,
        // like,
        like_count,
        is_like,
        postId,
        thumbnail
    } = props;
   // let thumbnail = "https://post-phinf.pstatic.net/MjAyMDAyMjlfMjY4/MDAxNTgyOTU0Nzg3MjQ4.PBMFV4WrSJmeSUJ56c4C7Vkz_SsQlJ1SByKU18kkJh0g.T7mQnadCWVtEZ448AGk_9kG1HFBAzdztXZcBjvSbduwg.JPEG/%EA%B3%A0%EC%96%91%EC%9D%B4_%EB%82%98%EC%9D%B41.jpg?type=w1200";

    // thumbnail = "https://mblogthumb-phinf.pstatic.net/20141204_276/firstgjp_14176838057819gNtv_JPEG/___.jpg?type=w2"




    const toggleLike = () => {
        //     if (!is_login&&!is_login2) {
        //         window.alert("로그인 해주세욥!")
        //       return;
        //    }
        setLike(!like)
        console.log(post_id)
        dispatch(actionCreators.LikeDB(post_id, token));
    }

    return (
        <>
            <div className="likePostCard">
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
        </>
    )
}

export default LikePost;