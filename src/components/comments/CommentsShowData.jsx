/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import style from "./CommenstShowData.module.css";
const CommentsShowData = ({ item }) => {
  const { postId, id, name, email, body } = item;

  return (
    <div>
      <article className={style.container}>
        <p>
          <b>PostId: </b> <span>{postId}</span>
        </p>
        <p>
          <b>Id: </b> <span>{id}</span>
        </p>
        <p>
          <b>Name: </b> <span>{name}</span>
        </p>
        <p>
          <b>Email: </b> <span>{email}</span>
        </p>
        <p>
          <b>Body: </b> <span>{body}</span>
        </p>
      </article>
    </div>
  );
};

export default CommentsShowData;
