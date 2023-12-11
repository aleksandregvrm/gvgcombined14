import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contact-form-container {
    margin-top: 3rem;
    width: 100%;
    max-width: 450px;
    padding: 0.5rem;
    padding-bottom: 3rem;
    border-radius: 20px;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
    position: relative;
    &:hover {
      box-shadow: 0 2px 10px var(--primary-black);
    }
  }
  .map-aligner-container {
    width: 90%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .contact-form h3 {
    margin-bottom: 1rem;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
    color: var(--primary-black);
  }
  .input-container,
  .textarea-container {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;
    border: 0.3px solid rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-radius: 10px;
    width: 90%;
  }
  .contact-form textarea {
    padding-left: 0.5rem;
    border: none;
    font-size: 1rem;
    border-radius: 8px;
    font-weight: 600;
    outline: none;
    width: 90%;
    padding-top: 0.2rem;
    background: transparent;
    color: var(--primary-black);
  }
  .submit-btn {
    font-size: 1.6rem;
    width: 70px;
    padding: 1rem 0;
    color: var(--primary-white);
    background: var(--primary-Company-red);
    transition: var(--transition);
    position: absolute;
    &:hover {
      opacity: 0.9;
      transform: translateY(45%);
    }
    bottom: 0;
    transform: translateY(50%);
    z-index: 2;
  }
  .contact-input {
    font-weight: 600;
    height: 1.5rem;
    color: var(--primary-black);
    font-size: 1rem;
    padding-left: 0.5rem;
    border-radius: 2px;
    border: none;
    outline: none;
    width: 90%;
    background: transparent;
  }
  .contacts-information {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 0.5rem;
  }
  .contact-info-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .contact {
    width: 100%;
    min-height: 70px;
    display: flex;
    max-width: 360px;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    overflow: hidden;
    border-top-left-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
  }
  .contacts-img {
    margin-top: 3rem;
    border-radius: 2rem;
    overflow: hidden;
  }
  .contact-info {
    text-align: right;
  }
  .icon-link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80px;
    min-height: 60px;
    color: var(--primary-white);
    text-align: center;
    background: var(--primary-black);
    font-size: 1.5rem;
  }
  @media screen and (min-width: 980px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem;
    margin-top: 2rem;
    min-height: 105vh;
    .contacts-information {
      width: 60%;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;
      padding-bottom: 2rem;
    }
    .contact-info-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 3rem;
    }
    .contact-form-container {
      min-height: 480px;
      margin-top: 1rem;
    }
    .map-aligner-container {
      width: 40%;
      min-height: 550px;
      height: calc(100vh - 210px);
      padding-bottom: calc(33.7px + 1rem);
    }
    .contacts-img img {
      border-radius: 5rem;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1300px) {
    .contacts-img{
      cursor: pointer;
      display: inline-block;
      max-width: 80%;
      transition: var(--transition);
      &:hover {
        scale: 1.06;
      }
    }
    .contacts-information {
      padding-bottom: 1rem;
      min-height: 500px;
      height: calc(100vh - 210px);
    }
    .map-aligner-container {
      width: 45%;
      align-items: flex-end;
      padding-bottom: 3.5rem;
    }
    .contact-form-container {
      max-height: 500px;
      max-width: 450px;
    }
  }
`;
export default Wrapper;
