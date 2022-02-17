import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';

import '../App.css'

function Comment(props) {
    const dispatch = useDispatch();
    const { comment, commentId, date, loginId, name, id } = props;
    const userName = localStorage.getItem("name");

    const [newComment, setNewComment] = React.useState("");
    const [isEdit, setIsEdit] = React.useState(false);

    const is_me = (userName === loginId) ? true : false;


    React.useEffect(() => {
        dispatch(commentActions.getCommentDB(id));
    }, [isEdit])

    const handleCommentDelete = () => {
        dispatch(commentActions.deleteCommentDB(id, commentId))
    }

    const handleCommentEdit = () => {
        if (isEdit) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }

    const changeNewComment = (e) => {
        setNewComment(e.target.value)
    }

    const submitNewComment = () => {
        dispatch(commentActions.editCommentDB(id, commentId, newComment))
            .then(() => {
                setIsEdit(false);
            })
    }

    return (
        <>
            <div className="commentContainer">
                {isEdit
                    ?
                    <>
                        <div>{name}</div>
                        <input defaultValue={comment} onChange={changeNewComment}></input>
                        <div>{date}</div>
                        <button onClick={submitNewComment}>수정완료</button>
                    </>
                    :
                    <>
                        <div>{name}</div>
                        <div>{comment}</div>
                        <div>{date}</div>
                    </>
                }
                {is_me &&
                    <>
                        <button onClick={handleCommentDelete}>삭제</button>
                        <button onClick={handleCommentEdit}>수정하기</button>
                    </>
                }
            </div>
        </>
    );
}

export default Comment;