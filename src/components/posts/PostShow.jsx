/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import style from "./PostShow.module.css";

const PostShow = ({ item }) => {
  const { id, title, body } = item;
  const [toggle, setToggle] = useState(false);
  return (
    <div className={style["post-container"]}>
      <article className={style.toggle}>
        <div className={style["post-box"]}>
          <h1>{id}.</h1>
          <h2>{title}</h2>
        </div>
        <button onClick={() => setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
      </article>
      {toggle ? <p>{body}</p> : null}
    </div>
  );
};

export default PostShow;
