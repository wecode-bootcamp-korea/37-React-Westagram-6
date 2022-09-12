import React from 'react';

const CommentList = ({ item }) => {
  return (
    <li className="comment-li">
      <span className="comment-text">
        <em>wecode_bootcamp</em>&nbsp;&nbsp;{item}
      </span>
      <div className="comment-btn-wrap">
        <button className="comment-heart-btn">
          <i className="fa-regular fa-heart" />
        </button>
        <button className="delete-btn">
          <i className="fa-solid fa-trash-can" />
        </button>
      </div>
    </li>
  );
};

export default CommentList;
