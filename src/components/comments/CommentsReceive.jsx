/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CommentsShowData from "./CommentsShowData";

import style from "./CommentsReceive.module.css";

const CommentsReceive = (props) => {
  const { data } = props;
  return (
    <div className={style.heading}>
      <h1>Comments</h1>
      <div className={style.container}>
        {data.map((item, index) => {
          return <CommentsShowData key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CommentsReceive;
