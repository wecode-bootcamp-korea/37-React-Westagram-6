import React from 'react';

function Comments(props) {
  return (
    <div className="content-box">
      <span className="comment-username">{props.userName}</span>
      <span className="comment-comment">{props.commentArr}</span>
    </div>
  );
}

export default Comments;
