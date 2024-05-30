/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import style from "./ShowData.module.css";

const ShowData = ({ item }) => {
  const { userId, id, title, completed } = item;
  return (
    <div className={style.container}>
      <h2 className={style.h1}>{id}</h2>
      <p>{title}</p>
      <p>{completed}</p>
    </div>
  );
};

export default ShowData;
