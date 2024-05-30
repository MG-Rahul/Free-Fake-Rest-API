/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Main from "./components/Main";
import style from "./App.module.css";
function App() {
  const [click, setClick] = useState(false);
  const [url, setUrl] = useState(null);
  const [posts, setPosts] = useState(null);
  const [todos, setTodos] = useState(null);
  const [comments, setComments] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [users, setUsers] = useState(null);
  const [albums, setAlbums] = useState(null);

  const handleClick = (string) => {
    setClick(true);
    setUrl(string);

    // Reset all states to null
    setPosts(null);
    setAlbums(null);
    setComments(null);
    setPhotos(null);
    setUsers(null);
    setTodos(null);

    // Use a switch statement to set the appropriate state
    switch (string) {
      case "posts":
        setPosts(string);
        break;
      case "comments":
        setComments(string);
        break;
      case "todos":
        setTodos(string);
        break;
      case "photos":
        setPhotos(string);
        break;
      case "users":
        setUsers(string);
        break;
      case "albums":
        setAlbums(string);
        break;
      default:
        console.log("Unknown string:", string);
    }

    console.log(string);
  };

  return (
    <>
      <h1 className={style.header}>Free Fake Rest API</h1>
      <div className={style.container}>
        <button onClick={() => handleClick("posts")}>POSTS</button>
        <button onClick={() => handleClick("comments")}>COMMENTS</button>
        <button onClick={() => handleClick("todos")}>TODOS</button>
        <button onClick={() => handleClick("photos")}>PHOTOS</button>
        <button onClick={() => handleClick("users")}>USERS</button>
        <button onClick={() => handleClick("albums")}>ALBUMS</button>
      </div>
      {click && (
        <Main
          todos={todos}
          posts={posts}
          photos={photos}
          comments={comments}
          users={users}
          albums={albums}
          url={url}
        />
      )}
    </>
  );
}

export default App;
