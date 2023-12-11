import { useEffect } from "react";
import {useDispatch,useSelector } from "react-redux";
import { AnimatedImage } from "../assets/wrappers/IntroductionWrapper";
import SliderDots from './SliderDots'
import { setActiveImageIndex } from "../features/menu/menuSlice";

/* this components is located inside the introduction component, and it uses useEffect to change the main image every 5,5 seconds, all the controllers are available in the feature/menu folders menu.jsx(redux) file  */

const IntroductionImages = () => {
  const {images,activeImageIndex} = useSelector((store)=>store.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(setActiveImageIndex((activeImageIndex + 1) % images.length));
    }, 6000);
    return () => clearInterval(intervalId);
  }, [activeImageIndex]);
  
  return (
    <div>
      <div className="img-container">
        <AnimatedImage key={images[activeImageIndex]} srcSet={images[activeImageIndex]} alt='Main Image' className="introduction-img"/>
      </div>
      <SliderDots/>
    </div>
  );
};

export default IntroductionImages;
