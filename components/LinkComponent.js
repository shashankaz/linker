import React from "react";

const Link = (props) => {
  return (
    <>
      <div id="box">
        <a href={props.url} target="_blank">
          <h2>{props.title}</h2>
        </a>
      </div>
    </>
  );
};

export default Link;
