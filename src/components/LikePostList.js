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
    React.useEffect(() => {
        //    if (post_list.length < 2) {
        dispatch(postActions.getLikePostDB());

        //    }
    }, [])
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