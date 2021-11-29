import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { userService } from "../../services/userService";
// import { userService } from "../../services/userService";
import { signup } from "../../store/actions/userActions";

export const SignupPage = (props) => {
  const [isSigned, setIsSigned] = useState(false);
  const [signupBtnClass, setSignupBtnClass] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignUp = (ev) => {
    ev.preventDefault();
    const fullname = ev.target.querySelector("#signup-fullname").value;
    const passHash = ev.target.querySelector("#signup-pass-hash").value;
    const phone = ev.target.querySelector("#signup-phone").value;
    const userCred = { fullname, passHash, phone };

    dispatch(signup(userCred))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  };

  const onIsPhoneSigned = async (ev) => {
    const phone = ev.target.value;
    const isSigned = await userService.isSigned(phone);
    if (isSigned) {
      setIsSigned(true);
      setSignupBtnClass("signed-phone");
    } else {
      setIsSigned(false);
      setSignupBtnClass(null);
    }
  };

  return (
    <form className="signup-form" onSubmit={onSignUp}>
      <h1>Signup</h1>
      <label htmlFor="signup-fullname">Full name</label>
      <input
        required
        type="text"
        id="signup-fullname"
        name="signup-fullname"
        placeholder="Ex.. Israel Israeli"
      />
      <label htmlFor="signup-pass-hash">Password</label>
      <input
        required
        type="password"
        id="signup-pass-hash"
        name="signup-pass-hash"
        placeholder="Ex.. !#@fdsf54%"
      />
      <label htmlFor="signup-phone">Phone number</label>
      {isSigned && <p className="err-msg">Already registered</p>}
      <input
        required
        type="text"
        id="signup-phone"
        name="signup-phone"
        placeholder="Ex.. 05x-xxxxxxx"
        onChange={onIsPhoneSigned}
      />
      <button disabled={isSigned} className={`btn ${signupBtnClass}`}>
        Sign up
      </button>
      <p onClick={() => navigate("/login")}>Log In</p>
    </form>
  );
};
