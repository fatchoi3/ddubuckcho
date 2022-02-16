import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api/api"


// actions
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";


// action creators
const getComment = createAction(GET_COMMENT, (postId, comment_list) => ({ postId, comment_list }));
const addComment = createAction(ADD_COMMENT, (postId, comment) => ({ postId, comment }));


//initialState
const initialState = {
    list: {},
}

//middleware actions
const getCommentDB = (postId) => {
    return async function (dispatch, getState) {
        if (!postId) {
            return;
        }

        await api.get(`/api/comments/${postId}`)
            .then((response) => {
                console.log("response data", response.data.comments)
                dispatch(getComment(postId, response.data.comments))
            }).catch((err) => {
                console.log("댓글 가져오기 실패", postId, err);
            })
    }
}

const addCommentDB = (postId, comment = {}) => {
    return async function (dispatch, getState) {
        const token = localStorage.getItem('token');
        console.log(comment.comment)

        // const data = {
        //     name: comment.name,
        //     comment: comment.commentContents,
        // }

        await api.post(`/api/make_comment/${postId}`, { 'comment': comment.comment },
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        ).then(function (response) {

        }).catch((err) => {
            console.log("댓글 추가하기 실패", postId, err);
        })
    }
}

const deleteCommentDB = (commentId) => {
    return async function (dispatch, getState) {
        const token = localStorage.getItem('token');
        await api.delete(`/api/delete/${commentId}`,
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        ).then(function (response) {
            console.log("코멘트 삭제하기", response)
            //window.alert("삭제 완료되었습니다.");
            window.location.href = "/";
        })
    }
}


//reducer
export default handleActions({
    [GET_COMMENT]: (state, action) => produce(state, (draft) => {
        draft.list[action.payload.postId] = action.payload.comment_list;
    }),

    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
        draft.list[action.payload.postId].push(action.payload.comment);
    }),

    [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {

    }),
},
    initialState
);


const actionCreators = {
    getCommentDB,
    getComment,
    addCommentDB,
    addComment,
    deleteCommentDB,
};

export { actionCreators };