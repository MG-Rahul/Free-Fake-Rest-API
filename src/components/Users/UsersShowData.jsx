/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import style from "./UsersShowData.module.css";

const UsersShowData = ({ item }) => {
  // Destructure properties from item, providing default values to avoid undefined errors
  const {
    id,
    name,
    username,
    email,
    address = {},
    phone,
    website,
    company = {},
  } = item;

  // Destructure nested properties, providing default values
  const { street = "", city = "", zipcode = "" } = address;

  const { name: companyName = "", catchPhrase = "", bs = "" } = company;
  return (
    <div>
      <article className={style.container}>
        <p>
          <b>ID:</b> {id}
        </p>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Username:</b> {username}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>
        <p>
          <b>Phone:</b> {phone}
        </p>
        <p>
          <b>Website: </b> <a href={website}>{website}</a>
        </p>
        <p>
          <b>Address: </b>
          <span>{street}, </span>
          <span>{city}, </span>
          <span>{zipcode}</span>
        </p>
        <p>
          <b>Company: </b>
          <span>{companyName}, </span>
          <span>{catchPhrase}, </span>
          <span>{bs} </span>
        </p>
      </article>
    </div>
  );
};

export default UsersShowData;
