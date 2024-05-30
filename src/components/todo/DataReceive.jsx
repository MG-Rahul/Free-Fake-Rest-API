/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ShowData from "./ShowData";
import style from "./DataReceive.module.css";
const DataReceive = ({ data }) => {
  return (
    <div className={style.heading}>
      <h1>Todos</h1>
      <div className={style.container}>
        {data.map((item, index) => {
          return <ShowData key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default DataReceive;
