import React from "react";
import "./Button.css";

export default function Button({ onClick, children, id, value }) {
  return (
    <button onClick={onClick} id={id} value={value}>
      {children}
    </button>
  );
}
