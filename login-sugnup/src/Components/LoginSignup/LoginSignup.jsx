import "./LoginSignup.css";
import user_icon from "../Assets/icon-user.png";
import mail_icon from "../Assets/icon-mail.png";
import password_icon from "../Assets/icon-password.png";


const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Signup</div>
        <div className="underlaine"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" />
        </div>
        <div className="input">
          <img src={mail_icon} alt="" />
          <input type="mail" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
      </div>
      <div className="forgot-passwor">Lost Password ? <span>Click Here !</span></div>
      <div className="submit-container">
        <div className="submit">Sign up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
