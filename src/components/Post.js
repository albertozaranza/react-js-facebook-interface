import React from "react";

import "./Post.css";

export default function PostItem({ data }) {
  const { content } = data;
  return (
    <div className="post">
      <PostHeader author={data.author} date={data.date} />
      <p className="content">{content}</p>
      <PostComments comments={data.comments} />
    </div>
  );
}

function PostHeader({ author, date }) {
  const { avatar, name } = author;
  return (
    <div className="post-header">
      <img src={avatar} className="avatar" />
      <div id="info">
        <div id="name">{name}</div>
        <div id="date">{date}</div>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="post-comments">
          <img src={comment.author.avatar} className="avatar" />
          <p id="comment">
            <span>{comment.author.name} </span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}
