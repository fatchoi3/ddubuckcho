import React from 'react';

import { useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

import '../App.css'

function Comment(props) {
    const dispatch = useDispatch();
    const { comment, name, postId, date } = props;
    console.log("값이 들어오나요?", comment, name, postId)

    const is_token = localStorage.getItem("token") ? true : false;

    const handleCommentDelete = () => {
        dispatch(commentActions.deleteCommentDB())
    }

    return (
        <>
            <div className="commentContainer">
                <div>{name}</div>
                <div>{comment}</div>
                <div>{date}</div>
                {/* {is_token &&
                    <button onClick={handleCommentDelete}>삭제</button>
                } */}
            </div>
        </>
    );
}

Comment.defaultProps = {
    name: "mean0",
    postId: 1,
    comment: "귀여운 고양이네요!",
    date: '2021-01-01 19:00:00'
}

export default Comment;