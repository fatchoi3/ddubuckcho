import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Carousel from 'react-elastic-carousel';

import { actionCreators as postActions } from '../redux/modules/post';
import LikePost from './LikePost';
import '../App.css'

function LikePostList(props) {
    const dispatch = useDispatch();
    // window.onload (dispatch(postActions.getLikePostDB()))
     const post_list = useSelector((state) => state.post.list);
    //const test = useSelector((state)=>state.post.list)
 //console.log("post_list",post_list)
    React.useEffect(() => {
    //    if (post_list.length < 2) {
            dispatch(postActions.getLikePostDB());
        
    //    }
    }, [])
    


    // const post_list = [{
    //     title: "1번 사진",
    //     thumbnail: "url 들어감",
    //     like: "",
    //     like_count: 0,
    //     is_like: false,
    //     postId: 1,
    //     userName: "qwe1232"
    // },
    // {
    //     title: "2번 사진",
    //     thumbnail: "url 들어감",
    //     like: "",
    //     like_count: 0,
    //     is_like: false,
    //     postId: 2
    // },
    // {
    //     title: "3번 사진",
    //     thumbnail: "url 들어감",
    //     like: "",
    //     like_count: 0,
    //     is_like: false,
    //     postId: 3
    // },
    // {
    //     title: "4번 사진",
    //     thumbnail: "url 들어감",
    //     like: "",
    //     like_count: 0,
    //     is_like: false,
    //     postId: 4
    // }
    // ]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <>
        <Carousel breakPoints={breakPoints} itemsToScroll={2} className="postLikeContainer">
           
                {post_list.map((p, idx) => {
                    return (
                        <LikePost key={idx} {...p} />
                    )
                })}
            
            </Carousel>
        </>
    )
}
export default LikePostList;