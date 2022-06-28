import Button from "./Button";
import "./ApplyTip.css";

export default function ApplyTip({
  onClick,
  onChange,
  onCustomClick,
  isActive,
}) {
  return (
    <div className="ApplyTip">
      <Button onClick={onClick} value="0.05" tip="0.05" id="tip">
        5%
      </Button>
      <Button onClick={onClick} value="0.10" tip="0.1" id="tip">
        10%
      </Button>
      <Button onClick={onClick} value="0.15" tip="0.15" id="middle">
        15%
      </Button>
      <Button onClick={onClick} value="0.25" tip="0.25" id="tip">
        25%
      </Button>
      <Button onClick={onClick} value="0.50" tip="0.5" id="tip">
        50%
      </Button>
      {!isActive ? (
        <Button onClick={onCustomClick} tip="Custom" id="custom">
          Custom
        </Button>
      ) : (
        <input id="customId" onChange={onChange} />
      )}
    </div>
  );
}
