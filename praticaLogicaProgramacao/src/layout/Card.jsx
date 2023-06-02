import React from "react";
import "../layout/Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <h1 className="title">{props.title}</h1>
      <p className="content">{props.children}</p>
    </div>
  );
}
