import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loadEmployees, login } from "../../store/actions/userActions";
import loginLoadingGif from "../../assets/icons/loading.gif";
import { loadSessions } from "../../store/actions/sessionActions";

export const LoginPage = () => {
  const [phoneInputClass, setPhoneInputClass] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [passHashInputClass, setPasswordInputClass] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (ev) => {
    setIsLoading(true);
    ev.preventDefault();
    const phone = ev.target.querySelector("#login-phone").value;
    const passHash = ev.target.querySelector("#login-pass-hash").value;
    const userCred = { phone, passHash };

    dispatch(login(userCred))
      .then(() => {
        dispatch(loadSessions());
        dispatch(loadEmployees());
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        setErrMsg(err.response?.data);
        setTimeout(() => {
          setErrMsg(null);
        }, 2000);
        if (err.response?.data === "Invalid phone") {
          setPhoneInputClass("error-input");
          setTimeout(() => {
            setPhoneInputClass(null);
          }, 2000);
        }
        if (err.response?.data === "Invalid pass-hash") {
          setPasswordInputClass("error-input");
          setTimeout(() => {
            setPasswordInputClass(null);
          }, 2000);
        }
      });
  };

  return !isLoading ? (
    <form className="login-form" onSubmit={onLogin}>
      <h1>Log In</h1>

      <label htmlFor="login-phone">Phone</label>
      {errMsg === "Invalid phone" && <p className="err-msg">{errMsg}</p>}
      <input
        className={phoneInputClass}
        required
        type="text"
        id="login-phone"
        name="login-phone"
        placeholder="Ex.. israeli2021@gmail.com"
      />

      <label htmlFor="login-pass-hash">Password</label>
      {errMsg === "Invalid passHash" && <p className="err-msg">{errMsg}</p>}
      <input
        className={passHashInputClass}
        required
        type="password"
        id="login-pass-hash"
        name="login-pass-hash"
        placeholder="Ex.. !#@fdsf54%"
      />
      <button className="btn">Log In</button>
      <p onClick={() => navigate("/signup")}>Register now</p>
    </form>
  ) : (
    <img className="login-loading" src={loginLoadingGif} alt="" />
  );
};
