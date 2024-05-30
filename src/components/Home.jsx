/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import DataReceive from "./todo/DataReceive";
import PhotoReceive from "./photos/PhotoReceive";
import PostReceive from "./posts/PostReceive";
import UsersReceive from "./Users/UsersReceive";
import CommentsReceive from "./comments/CommentsReceive";
import AlbumsReceive from "./albums/AlbumsReceive";

const Home = (props) => {
  const { data, value } = props;
  return (
    <div>
      {value === "todos"
        ? data && <DataReceive key={data.id} data={data} />
        : ""}
      {value === "photos"
        ? data && <PhotoReceive key={data.id} data={data} />
        : ""}
      {value === "posts"
        ? data && <PostReceive key={data.id} data={data} />
        : ""}
      {value === "users"
        ? data && <UsersReceive key={data.id} data={data} />
        : ""}
      {value === "comments"
        ? data && <CommentsReceive key={data.id} data={data} />
        : ""}
      {value === "albums"
        ? data && <AlbumsReceive key={data.id} data={data} />
        : ""}
    </div>
  );
};

export default Home;
