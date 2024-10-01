import * as React from "react";
import "./scss/app.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function App(): React.ReactElement {
  const [password, setPassword] = React.useState("");
  const [style, setStyle] = React.useState<"password" | "text">("password");

  const handleChangeStyle = () => {
    setStyle(style === "password" ? "text" : "password");
  };

  const handleInputChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = (value: string) => {
    setPassword(password + value);
  };

  const handleClear = () => {
    setPassword("");
  };

  const handleDelete = () => {
    setPassword(password.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header__back">
          <Link to="/back">
            <FontAwesomeIcon icon={faChevronLeft} />
            &nbsp;&nbsp;Back
          </Link>
        </div>
        <h1>Password</h1>
      </div>

      <div className="input">
        <p>Enter admin password</p>
        <div className="input__section">
          <input
            type={style}
            className="input__section-password"
            value={password}
            onChange={handleInputChange}
            disabled
          />
          <button className="input__section-button" onClick={handleChangeStyle}>
            Show
          </button>
        </div>
      </div>

      <div className="numpad">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button className="numpad__clear-button" onClick={handleClear}>
          &#10006;
        </button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button className="numpad__delete-button" onClick={handleDelete}>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </div>

      <Link to="/next">
        <button className="continue">Continue</button>
      </Link>

    </div>
  );
}

export default App;
