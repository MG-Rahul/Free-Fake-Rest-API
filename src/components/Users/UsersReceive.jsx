/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UsersShowData from "./UsersShowData";

import style from "./UsersReceive.module.css";
const UsersReceive = (props) => {
  const { data } = props; 
  return (
    <div className={style.heading}>
      <h1>Users</h1>
      <div className={style.container}>
        {data.map((item, index) => {
          return <UsersShowData key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default UsersReceive;
