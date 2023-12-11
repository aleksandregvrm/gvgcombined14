import { useState } from "react";
import {useDispatch} from 'react-redux';
import {
  faEnvelope,
  faPaperPlane,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginUser } from "../features/user/userSlice";
import { handleChange } from "../utils";

const LoginForm = () => {
  const dispatch = useDispatch();
    const initialState = {
        email:'',
        password:''
    }
    const [values, setProductValues] = useState(initialState);
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(loginUser({email:values.email,password:values.password}))
      setProductValues(initialState);
    };
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={submitHandler}>
        <h3>User Login</h3>
        {/* inputs */}
        <div className="input-container">
          <label htmlFor="login-email">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            className="login-input"
            type="email"
            placeholder="email"
            id="login-email"
            name="email"
            value={values.email}
            required
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        <div className="input-container">
          <label htmlFor="login-password">
            <FontAwesomeIcon icon={faLock} />
          </label>
          <input
            className="login-input"
            type="password"
            name="password"
            id="login-password"
            placeholder="password"
            value={values.password}
            onChange={(e) => handleChange({ setProductValues, e })}
            required
          />
        </div>
        <div className="forgot-container">
          <span>Georgian Vending Group</span>
        </div>
        {/* inputs end */}
        <button type="submit" className="btn submit-btn">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};
export default LoginForm;
