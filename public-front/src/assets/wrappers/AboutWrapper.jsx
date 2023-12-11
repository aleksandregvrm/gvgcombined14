import styled from "styled-components";

const Wrapper = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* numeric stats */
  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .big {
    font-family: var(--number-font);
  }
  .info {
    text-align: center;
  }
  .underline {
    margin-top: 1rem;
  }
  /* end */
  /* paragraph and image */
  .about-paragraph {
    margin-top: 1rem;
    padding: 1rem;
  }
  .about-box {
    display: flex;
    flex-direction: column;
  }
  .about-img {
    padding: 1rem;
    width: 100%;
  }
  .about-img img {
    border-radius: 1rem;
  }
  /* end */
  /* instagram */
  /* end */
  @media screen and (min-width: 980px) {
    min-height: 105vh;
    padding-top: 1rem;
    /* padding-bottom: 3rem; */
    /* numeric stats */
    .about-stats {
      height: calc(100vh - 660px);
      padding: 4rem;
      /* padding-top: 1rem; */
      flex-direction: row;
      justify-content: center;
    }
    .info {
      display: flex;
      align-items: center;
      margin-top: 1rem;
    }
    h1 {
      margin-right: 1rem;
    }
    .underline {
      width: 2px;
      height: 100%;
      margin: 1rem;
    }
    .big {
      font-family: var(--number-font);
      font-size: 4.5rem;
    }
    /* end */
    /* paragraph and image */
    .about-paragraph {
      width: 50%;
    }
    .about-img {
      width: 50%;
    }
    .about-img img {
      border-radius: 10rem;
    }
    .about-box {
      flex-direction: row;
      align-items: center;
    }
    /* end */
    /* instagram */

    /* end  */
  }
`;
export default Wrapper;
