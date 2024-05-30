/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import style from "./AlbumsReceive.module.css";
import AlbumsShowData from "./AlbumsShowData";
const AlbumsReceive = (props) => {
  const { data } = props;

  return (
    <div className={style.heading}>
      <h1>Albums</h1>
      <div className={style.container}>
        {data.map((item, index) => {
          return <AlbumsShowData key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AlbumsReceive;
