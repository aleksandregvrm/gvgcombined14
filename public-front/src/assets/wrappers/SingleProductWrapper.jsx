import styled from "styled-components";

const Wrapper = styled.section`
  top: 0;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  visibility: hidden;
  color: var(--primary-white);
  z-index: 100;
  .background {
    /* overflow-y: scroll; */
    position: absolute;
    background: var(--primary-black);
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .background h2,h3 {
    color:var(--primary-white)
  }
  .img-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    object-fit: fill;
    max-height: 600px;
  }
  .close-button{
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    font-size: 2rem;
    transition: var(--transition);
    color: var(--primary-Company-red);
    &:hover{
        scale: 1.1;
    }
  }
  .text-container {
    padding: 1rem;
  }
  .img-container img {
    object-fit: contain;
  }
  p{
    margin-top: 2rem;
  }
  .active {
    visibility: visible;
    opacity: 0.9;
  }
  @media screen and (min-width: 1180px) {
    .background {
      flex-direction: row;
    }
    .img-container {
      width: 50%;
    }
    .text-container {
      padding: 2rem;
      width: 45%;
      overflow-y: auto;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
`;
export default Wrapper;
