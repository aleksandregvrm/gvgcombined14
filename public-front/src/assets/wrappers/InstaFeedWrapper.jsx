import styled,{keyframes} from "styled-components";

const animatedButton = keyframes`
  0%{
    scale: 1;
  }
  50%{
    scale: 0.9;
  }
  100%{
    scale: 1;
  }
`;
const Wrapper = styled.article`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .instagram-button {
    font-size: 3rem;
    color: var(--primary-black);
    animation: ${animatedButton} linear 2.5s infinite;
  }
  .error-instagram-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-images-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 309px;
    overflow: hidden;
    justify-content: center;
    /* gap: 0.5rem; */
  }
  .instagram-images div {
    width: 100%;
    max-width: 309px;
    height: 309px;
    position: relative;
  }
  .instagram-images video{
    width: 309px;
  }
  .instagram-img {
    height: 309px;
    object-fit: cover;
    max-width: 309px;
    cursor: pointer;
  }
  .instagram-icon-small {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    font-size: 1.5rem;
    color: var(--primary-white);
    z-index: 2;
    opacity: 0.9;
  }
  .instagram-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .instagram-header h2 {
    color: var(--primary-Company-red);
    font-weight: 900;
    font-size: 2.35rem;
  }
  @media screen and (min-width: 980px) {
    margin-top: 0rem;
    .instagram-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 80%;
    }
    .instagram-images-container {
      gap: 1rem;
    }
    .instagram-images {
      justify-content: flex-start;
      gap: 0;
    }
    .instagram-img {
      border-radius: 0;
      object-fit: cover;
      width: 100%;
    }
    .instagram-images div:hover .instagram-icon-small {
      color: var(--primary-Company-red);
      transition: var(--transition);
    }
  }
`;
export default Wrapper;