import styled from "styled-components";

const Wrapper = styled.section`
  .slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    /* transition: 1000ms; */
    scale: 0.2;
    opacity: 0;
    z-index: 0.8;
  }
  .download-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    /* height: 100px; */
    /* transition: 1000ms; */
    scale: 0.2;
    opacity: 0;
    z-index: 1;
  }
  .slide-img {
    width: 100%;
    height: 100%;
  }
  .activeSlide {
    opacity: 1;
    scale: 0.9;
    z-index: 90;
    transform: scale(1);
    transition: 1500ms linear;
  }
  .nextSlide {
    transform: translateX(120%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .nextNextSlide {
    transform: translateX(240%);
    scale: 0.9;
    z-index: 0;
    transition: 1500ms linear;
    opacity: 1;
  }
  .threeNextSlide {
    transform: translateX(360%);
    scale: 0.9;
    z-index: 0;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fourNextSlide {
    transform: translateX(480%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .fiveNextSlide {
    transform: translateX(600%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .sixNextSlide {
    transform: translateX(720%);
    scale: 0.9;
    z-index: 0;
    /* transition: 1000ms; */
    opacity: 0.9;
  }
  .lastSlide {
    transform: translateX(-120%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .lastLastSlide {
    transform: translateX(-240%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 1;
  }
  .threeLastSlide {
    transform: translateX(-360%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fourLastSlide {
    transform: translateX(-480%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .fiveLastSlide {
    transform: translateX(-600%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .sixLastSlide {
    transform: translateX(-720%);
    scale: 0.9;
    transition: 1500ms linear;
    opacity: 0.9;
  }
  .carousel-container {
    padding-top: 0.5rem;
    width: 90%;
    margin: 0 auto;
    min-height: 110px;
    height: 25vh;
    position: relative;
    overflow: hidden;
  }
  .carousel-container-download {
    overflow: hidden;
    width: 100%;
    height: 150px;
    position: relative;
    border-radius: 3rem;
  }
  .carousel-container {
    height: 100px;
  }
  @media screen and (min-width: 450px) {
    .slide {
      height: 90px;
      width: 113px;
    }
    .download-slide {
      height: 105px;
      width: 125px;
    }
  }
  @media screen and (min-width: 890px) {
    .carousel-container {
      padding-top: 0.5rem;
      width: 90%;
      min-height: 190px;
      height: 25vh;
      position: relative;
      overflow: hidden;
      margin: 0 auto;
    }
    .slide{
      height: 112px;
      width: 141px;
    }
  }
  @media screen and (min-width: 1200px) {
    .slide {
      height: 80%;
      width: 14%;
    }
  }
`;

export default Wrapper;
