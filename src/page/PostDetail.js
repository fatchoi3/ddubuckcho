import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  //  useHistory
} from "react-router-dom";

import "../App.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';

const PostDetail = (props) => {
  const id = props.match.params.id;
  const post_list = useSelector(state => state.post.list);

  const post_idx = post_list.findIndex(p => p._id === id);
  const post = post_list[post_idx]


  const name = localStorage.getItem("name");
  const is_me = (name === post?.loginId) ? true : false;







  //const history =useHistory()
  // const test = useSelector((state)=>state.post)

  console.log("post", post)
  return (
    <div className="container" padding="16px">
      <div className="postcontainer" width="auto">
        <div className="title_container">
          <h2 className="title">{post?.title}</h2>
        </div>
        <img src={"http://3.35.233.188/" + post?.thumbnail} className="img" />
        <div className="description">
          <div className="heart">
            {/* <FavoriteIcon 
        pull="right" 
        post_id={postId}
        color="pink">  
        </FavoriteIcon> */}
          </div>
          <p className="content">{post?.contents}</p>
          {is_me &&
            <div className="button">
              <Link to={`/write/${id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  box-shadow="0px 7px 3px rgba(0, 0, 0, 0.2)"
                >
                  수정하기📝
                </Button>
              </Link>
            </div>}
        </div>
        <CommentWrite postId={id} name={name} />
        <CommentList postId={id} name={name} />
      </div>
    </div>
  );
};

PostDetail.defaultProps = {
  title: "타이틀이에요",
  images: "https://community0374.s3.ap-northeast-2.amazonaws.com/catlove.jpg",
  thumbnail: "",
  content: "고양이 컨텐츠에요",
  like: "",
  like_count: "",
  is_like: "",
  useId: "",
};
export default PostDetail;