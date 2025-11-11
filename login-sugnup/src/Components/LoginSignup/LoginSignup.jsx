import "./LoginSignup.css";
import user_icon from "../Assets/icon-user.png";
import mail_icon from "../Assets/icon-mail.png";
import password_icon from "../Assets/icon-password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={mail_icon} alt="mail icon" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign up")}
        >
          Sign up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
