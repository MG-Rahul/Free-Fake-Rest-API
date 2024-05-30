/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import useFetch from "../CustomHooks/useFetch";
import Home from "./Home";

const style = {
  display: "inline-block",
  padding: "10px",
  border: "1px solid black",
  borderRadius: "10px",
  boxShadow: "1px 1px 1px 1px rgba(0,0,0,0.5)",
  marginLeft: "40px",
  backgroundColor: "rgb(13, 202, 139)",
  textAlign: "center",
  color: "white",
};
const Main = (props) => {
  const { todos, photos, posts, comments, users, albums, url } = props;
  const { data, isloaded, error } = useFetch(
    `https://jsonplaceholder.typicode.com/${url}`
  );
  const loadingMessage = <p>Data is Loading</p>;
  const errorMessage = <p>{error}</p>;
  return (
    <div>
      {isloaded && <h3 style={style}>{loadingMessage}</h3>}
      {error && <h3 style={style}>{errorMessage}</h3>}
      {todos === "todos" ? data && <Home data={data} value={todos} /> : ""}
      {photos === "photos" ? data && <Home data={data} value={photos} /> : ""}
      {posts === "posts" ? data && <Home data={data} value={posts} /> : ""}
      {comments === "comments"
        ? data && <Home data={data} value={comments} />
        : ""}
      {users === "users" ? data && <Home data={data} value={users} /> : ""}
      {albums === "albums" ? data && <Home data={data} value={albums} /> : ""}
    </div>
  );
};

export default Main;

// {
//   todos === "todos" ? data && <Home data={data} /> : "";
// }
// {
//   photos === "photos" ? data && <PhotoHome data={data} /> : "";
// }
// {
//   posts === "posts" ? data && <PostsHome data={data} /> : "";
// }
// {
//   comments === "comments" ? data && <CommentsHome data={data} /> : "";
// }
// {
//   users === "users" ? data && <UsersHome data={data} /> : "";
// }
// {
//   albums === "albums" ? data && <AlbumsHome data={data} /> : "";
// }
