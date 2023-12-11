import { useEffect } from "react";
import { Introduction } from "../components";
import { landingPageEvent } from "../facebook-pixel/FacebookFunctions";

const HomePage = () => {
  useEffect(()=>{
    landingPageEvent();
  },[])
  return (
    <>
      <Introduction/>
    </>
  );
};

export default HomePage;
