import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';
import Post from './Post';

function DatePostList(props) {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);

    //console.log("post_list",post_list)
    React.useEffect(() => {

        // if (post_list.length < 2) {
            dispatch(postActions.getDatePostDB());
            console.log("나는 보이니?")
        // }
     }, [])

    return (
        <>
            <div className="postDateContainer">
                {post_list.map((p, idx) => {
                    return (
                        <Post key={idx} {...p} />
                    )
                })}
            </div>
        </>
    );
}

export default DatePostList;