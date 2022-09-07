import React, { useState } from 'react';
import Comments from './Comments.js';
const [feedComments, setFeedComments] = useState([]);

function CommentList() {
  // const post = e => {
  //   const copyFeedComments = [...feedComments];
  //   copyFeedComments.push(comment);
  //   setFeedComments(copyFeedComments);
  //   setComment('');
  // };
  // return (
  //   <div className="comment-input-box">
  //     {feedComments.map((commentArr, user) => {
  //       return (
  //         <div className="mainComments" key={user}>
  //           <Comments userName={userName} commentArr={commentArr} />
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default CommentList;
