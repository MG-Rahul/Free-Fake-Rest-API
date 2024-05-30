/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import PostShow from "./PostShow";

import style from "./PostReceive.module.css";

const PostReceive = (props) => {
  const { data } = props;
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Post</h1>
      <section className={style.box}>
        {data.map((item, index) => {
          return <PostShow key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default PostReceive;
