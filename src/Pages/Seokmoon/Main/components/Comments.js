import React from 'react';

function Comments(props) {
  return (
    <div className="Comments">
      <span className="comment-username">{props.userName}</span>
      <span className="comment-comment">{props.commentArr}</span>
    </div>
  );
}

export default Comments;
