import React from 'react';

const CommentList = props => {
  return (
    <li className="comment-li">
      <span className="comment-text">
        <em>{props.sampleName}</em>&nbsp;&nbsp;{props.item}
      </span>
      <div className="comment-btn-wrap">
        <button className="comment-heart-btn">
          <i class="fa-regular fa-heart" />
        </button>
        <button className="delete-btn">
          <i className="fa-solid fa-trash-can" />
        </button>
      </div>
    </li>
  );
};

export default CommentList;
