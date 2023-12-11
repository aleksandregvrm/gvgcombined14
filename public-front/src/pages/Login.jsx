import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/LoginWrapper";
import LoginForm from "../components/LoginForm";
import { logoutUser } from "../features/user/userSlice";

const Login = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const maxWidthForLogin = 1180;
    if (screenWidth < maxWidthForLogin) {
      navigate("/");
    }
  }, [navigate]);

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  if (user) {
    return (
      <Wrapper>
        <div className="logged-in-container">
          <h2>{user} is logged in</h2>
          <button onClick={logoutHandler} className="btn logout-btn">Log Out</button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
