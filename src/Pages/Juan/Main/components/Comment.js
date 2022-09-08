import React from 'react';

function Comment(props) {
  const { comment, onXClick } = props;

  return (
    <li className="userReply">
      <div className="replyTextContainer">
        <p className="userId">new_reply</p>
        <p className="replyText">{comment.content}</p>
      </div>
      <div className="replyBtnContainer">
        <button onClick={() => onXClick(comment.id)} className="deleteBtn">
          x
        </button>
        <button>
          <i className="fa-regular fa-heart reple_heart" />
        </button>
      </div>
    </li>
  );
}

export default Comment;
