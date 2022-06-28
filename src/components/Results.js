import React from "react";
import ResetButton from "./ResetButton";
import "./Results.css";
import Output from "./Output";

export default function Results({ total, numberPeople, tip, onClick }) {
  const tipPerPerson = Math.round(((total * tip) / numberPeople) * 100) / 100;
  const totalPerPerson = Math.round((total / numberPeople) * 100) / 100;

  return (
    <div className="Results">
      {numberPeople > 0 && total > 0 ? (
        <div>
          <Output amount={tipPerPerson} name="Tip" />
          <Output amount={totalPerPerson} name="Total" />
        </div>
      ) : (
        <div>
          <Output amount="0" name="Tip" />
          <Output amount="0" name="Total" />
        </div>
      )}
      <ResetButton onClick={onClick} />
    </div>
  );
}
