import React, { useState } from "react";
import InputData from "./InputData";
import Results from "./Results";
import "./Calculator.css";

export default function Calculator() {
  const [total, setTotal] = useState(0.0);
  const [tipAmount, setTipAmount] = useState(0.0);
  const [numberPeople, setNumberPeople] = useState(0.0);
  const [valTotal, setValTotal] = useState();
  const [valPlp, setValPlp] = useState();
  const [isActive, setIsActive] = useState(false);

  function handleFocusTotal(event) {
    setValTotal("");
  }

  function handleFocusPlp(event) {
    setValPlp("");
  }

  function handleTotalChange(event) {
    setTotal(event.target.value);
    setValTotal(event.target.value);
  }

  function handleNumberPeople(event) {
    setNumberPeople(event.target.value);
    setValPlp(event.target.value);
  }

  function handleTipButton(event) {
    setTipAmount(event.target.value);
  }

  function handleResetButton() {
    setTipAmount(0);
    setTotal(0);
    setNumberPeople(0);
    setValTotal(0);
    setValPlp(0);
    setIsActive(false);
  }

  function handleCustomChange(event) {
    setTipAmount(event.target.value);
  }

  function handleCustomClick() {
    setIsActive(true);
  }

  return (
    <div className="Calculator">
      <InputData
        onTotalChange={handleTotalChange}
        onPeopleChange={handleNumberPeople}
        onClick={handleTipButton}
        valTotal={valTotal}
        valPlp={valPlp}
        onFocusTotal={handleFocusTotal}
        onFocusPlp={handleFocusPlp}
        onCustomChange={handleCustomChange}
        onCustomClick={handleCustomClick}
        isActive={isActive}
      />
      <Results
        total={total}
        numberPeople={numberPeople}
        tip={tipAmount}
        onClick={handleResetButton}
      />
    </div>
  );
}
