import styled,{keyframes} from "styled-components";

const animatedCategory = keyframes`
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
const Wrapper = styled.section`
  /* Category  */
  .categories {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
  }
  .category {
    height: 55vh;
    text-align: center;
    position: relative;
    font-size: 0.9rem;
    animation: ${animatedCategory} linear 1.2s;
  }
  .category img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .category h2 {
    box-shadow: 0 5px 5px 1;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: var(--primary-white);
  }
  /* end */
  /* company images */
  .company-images {
    display: none;
  }
  /* end */
  /* Download */
  .download {
    padding: 1rem 1rem;
    padding-top: 4rem;
    max-width: 1260px;
    margin: 0 auto;
  }
  .download-link {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
  }
  .download-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 255px;
  }
  .download-btn {
    font-size: 1rem;
    border-radius: 0;
    width: 255px;
    padding: 1.3rem;
    transition: var(--transition);
    background: var(--primary-Company-red);
    &:hover {
      background: var(--primary-white);
    }
    border: none;
  }
  .download-btn a {
    color: var(--primary-black);
  }
  .download-text {
    display: flex;
    justify-content: space-between;
  }
  .text-underline {
    width: 100%;
    max-width: 255px;
    margin: 1rem 0;
  }
  /* End */
  @media screen and (min-width: 990px) {
    /* company images */
    .company-images {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      gap: 1rem;
      width: 100%;
      height: 180px;
      padding: 20px 0;
      padding-top: 70px;
      justify-content: space-around;
      align-items: center;
    }
    .company-images img {
      opacity: 0.5;
      object-fit: contain;
      height: 6rem;
      width: 12rem;
    }
    /* end */
    /* Category */
    .categories {
      flex-direction: row;
    }
    .category {
      margin-top: 0;
      min-height: 300px;
      height: calc(100vh - 376px);
      width: 100%;
    }
    .category:hover {
      transition: var(--transition);
      transform: translateY(1%);
    }
    /* end */
    /* Money Slides Container */
    .money-slides-container {
      width: 80%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      /* align-items: center; */
    }
    /* end  */
    /* Downloads */
    .download {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      padding-top: 3rem;
    }
    .download-text {
      display: flex;
      justify-content: space-between;
    }
    .pdf-icon {
      font-size: 1.5rem;
    }
    /* end */
  }
`;

export default Wrapper;
