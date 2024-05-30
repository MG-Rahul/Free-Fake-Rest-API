/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import PhotoShow from "./PhotoShow";
import style from "./PhotosReceive.module.css";

const PhotoReceive = ({ data }) => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Photos</h1>
      <section className={style.box}>
        {data.map((item, index) => {
          return <PhotoShow key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default PhotoReceive;
