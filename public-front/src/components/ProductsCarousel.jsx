import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/CarouselWrapper";

const ProductsCarousel = ({ images, atHome }) => {
  const [index, setIndex] = useState(0);

  /* this useEffect determines whether the index has reached the last image and based on that restarts the carousel seemlessly. also the atHome is used to conditionally render the parent div. if it is located at the home page it uses carousel-container class else carousel-container-download, also based on that give classname of Slide and Download slide*/
  const lastIndex = images.length - 1;
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === lastIndex ? 0 : prevIndex + 1));
    }, 1450);

    return () => {
      clearInterval(slider);
    };
  }, [images]);

  return (
    <Wrapper>
      <div
        className={
          atHome ? "carousel-container" : "carousel-container-download"
        }
      >
        {images.map((img, imgIndex) => {
          let position = atHome ? "slide" : "download-slide";

          if (imgIndex === index) {
            position = atHome
              ? "activeSlide slide"
              : "download-slide activeSlide";
          } else if (imgIndex === (index + 1) % images.length) {
            position = atHome ? "nextSlide slide" : "download-slide nextSlide";
          } else if (imgIndex === (index + 2) % images.length) {
            position = atHome
              ? "nextNextSlide slide"
              : "download-slide nextNextSlide";
          } else if (imgIndex === (index + 3) % images.length) {
            position = atHome
              ? "threeNextSlide slide"
              : "download-slide threeNextSlide";
          } else if (imgIndex === (index + 4) % images.length) {
            position = atHome
              ? "fourNextSlide slide"
              : "download-slide fourNextSlide";
          } else if (imgIndex === (index - 1 + images.length) % images.length) {
            position = atHome ? "lastSlide slide" : "download-slide lastSlide";
          } else if (imgIndex === (index - 2 + images.length) % images.length) {
            position = atHome
              ? "lastLastSlide slide"
              : "download-slide lastLastSlide";
          } else if (imgIndex === (index - 3 + images.length) % images.length) {
            position = atHome
              ? "threeLastSlide slide"
              : "download-slide threeLastSlide";
          } else if (imgIndex === (index - 4 + images.length) % images.length) {
            position = atHome
              ? "fourLastSlide slide"
              : "download-slide fourLastSlide";
          }
          return (
            <img
              key={imgIndex}
              className={position}
              srcSet={img}
              alt="carousel-image"
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ProductsCarousel;
