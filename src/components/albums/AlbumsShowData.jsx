/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./AlbumsShowData.module.css";

const AlbumsShowData = ({ item }) => {
  const { userId, id, title } = item;
  return (
    <div>
      <article className={style.container}>
        <p>
          <b>ID: </b> <span>{id}</span>
        </p>
        <p>
          <b>Title: </b> <span>{title}</span>
        </p>
      </article>
    </div>
  );
};

export default AlbumsShowData;
