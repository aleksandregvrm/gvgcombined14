import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { customFetch } from "../utils";
import { Loading } from "../components";
import Wrapper from "../assets/wrappers/VerifyWrapper";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const VerifyEmail = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = useQuery();
  const verifyToken = async () => {
    setLoading(true);
    try {
      const { data } = await customFetch.post("/auth/verify-email", {
        verificationToken: query.get("token"),
        email: query.get("email"),
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(()=>{
    verifyToken();
  },[])
  if (loading) {
    return (
      <Wrapper>
        <Loading/>
      </Wrapper>
    );
  }
  if(error){
    return <Wrapper>
        <h2>There has been an error with verifying</h2>
    </Wrapper>
  }
  return (
    <Wrapper>
      <h2>Account Confirmed</h2>
      <Link to="/login" className="btn">
        Please login
      </Link>
    </Wrapper>
  );
};

export default VerifyEmail;
