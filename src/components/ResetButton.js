import React from "react";
import Button from "./Button";
import "./ResetButton.css";

export default function ResetButton({ onClick }) {
  return (
    <div className="ResetButton">
      <Button onClick={onClick} tip="RESET" id="reset">
        RESET
      </Button>
    </div>
  );
}
