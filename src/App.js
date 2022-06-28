import Logo from "./images/logo.svg";
import "./App.css";
import Calculator from "./components/Calculator.js";

function App() {
  return (
    <div className="App">
      <img src={Logo} className="App-logo" alt="logo" />
      <Calculator className="calculator" />
    </div>
  );
}

export default App;
