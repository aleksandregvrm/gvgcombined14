import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorWrapper";
import errorVending from "../assets/other-images/Error-vending.png";

const Error = () => {
  const error = useRouteError();
  return (
    <Wrapper>
      <div className="error-container">
        <h2>There has been an error in locating the page :(</h2>
        <div className="img-container">
          <h5>click on the vending machine to navigate to the home page</h5>
          <NavLink to='/'>
            <img srcSet={errorVending} alt=""/>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;
