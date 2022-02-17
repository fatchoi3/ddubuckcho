import React from 'react';
import Comment from './Comment';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as commentActions } from '../redux/modules/comment';


function CommentList(props) {
    const dispatch = useDispatch();
    const { postId } = props;
    // const postId = props.match.params.id
    const comment_list = useSelector(state => state.comment.list);
    console.log(comment_list[postId]);

    React.useEffect(() => {
        // if (!comment_list[postId]) {
        console.log("useEffect 안에 있습니다.", postId)
        dispatch(commentActions.getCommentDB(postId))
        // }
    }, []);

    console.log("길이", comment_list)


    if (!comment_list[postId] || !postId) {
        return null;
    }

    return (
        <>
            {comment_list &&
                comment_list[postId].map((comment, idx) => {
                    return (
                        <div key={comment.commentId} className="commentListContainer">
                            <Comment  {...comment} />
                        </div>
                    )
                })
            }
        </>
    );
}

CommentList.defaultProps = {
    postId: null
};

export default CommentList;