import ApplyTip from "./ApplyTip.js";
import "./InputData.css";

export default function InputData({
  onTotalChange,
  onPeopleChange,
  onClick,
  valTotal,
  valPlp,
  onFocusTotal,
  onFocusPlp,
  onCustomChange,
  onCustomClick,
  isActive,
}) {
  console.log(valPlp);
  return (
    <div className="Inputdata">
      <div className="Dollardiv">
        <label className="Inputlabel">Bill</label>
        <div className="DollarDiv">
          <input
            className="InputDollar"
            onChange={onTotalChange}
            value={valTotal}
            onFocus={onFocusTotal}
          />
        </div>
      </div>
      <div className="Buttons">
        <label className="Inputlabel">Select Tip %</label>
        <ApplyTip
          onClick={onClick}
          onChange={onCustomChange}
          onCustomClick={onCustomClick}
          isActive={isActive}
        />
      </div>
      <div>
        <label className="Inputlabel">
          Number of people{" "}
          {valPlp === 0 ? (
            <span className="span" style={{ color: "red" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              It can't be 0
            </span>
          ) : (
            ""
          )}
        </label>
        <div className="PersonDiv">
          <input
            className="InputPlp"
            onChange={onPeopleChange}
            value={valPlp}
            onFocus={onFocusPlp}
          />
        </div>
      </div>
    </div>
  );
}
