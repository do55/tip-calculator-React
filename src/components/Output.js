import React from "react";
import "./Output.css";

export default function Output({ amount, name }) {
  return (
    <div className="Output">
      <div className="Labels">
        <label on style={{ color: "white" }}>
          {name} Amount
        </label>
        <br></br>
        <label style={{ color: "hsl(186, 14%, 43%)" }}>/Person</label>
      </div>
      <div className="Amount">
        <p style={{ color: "hsl(172, 67%, 45%)" }}>{amount.toString()}</p>
      </div>
    </div>
  );
}
