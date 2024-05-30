/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import style from "./PhotoShow.module.css";

const PhotoShow = ({ item }) => {
  const { albumId, id, title, url, thumbnailUrl } = item;
  const localImage = "./src/assets/rahul.png";
  const localThumbnail = "./src/assets/logo.png";
  return (
    <article className={style.container}>
      <div className={style.boxImg}>
        <img src={localImage} alt={title} />
        <img src={thumbnailUrl} alt={title} />
      </div>
      <h3>{title}</h3>
    </article>
  );
};

export default PhotoShow;
