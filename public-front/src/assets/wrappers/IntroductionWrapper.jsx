import styled,{keyframes} from "styled-components";

export const Wrapper = styled.section`
  .introduction-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .img-container {
    /* height: 60vh; */
  }
  .dots-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .dot {
    border: 1px solid black;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-white);
    cursor: pointer;
  }
  .active {
    background: var(--primary-black);
  }
  p {
    padding: 1rem;
    margin-top: 3rem;
  }
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    h2 {
      text-align: center;
    }
    .introduction-img {
      object-fit: cover;
    }
    .img-container {
      min-height: 550px;
      height: calc(100vh - 148px);
    }
  }
`;

const loadingAnimationImage = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`
export const AnimatedImage = styled.img`
  animation:${loadingAnimationImage} linear 1.2s;
`
