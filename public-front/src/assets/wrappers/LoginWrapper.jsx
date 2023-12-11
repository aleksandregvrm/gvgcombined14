import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 700px;
  height: 105vh;
  padding: 1rem;
  .login-form-container {
    width: 40%;
    min-width: 300px;
    border-radius: 2rem;
    position: relative;
    height: 35%;
    min-height: 300px;
    margin: 4rem auto;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.05);
    transition:var(--transition);
    &:hover {
      box-shadow: 0 2px 10px var(--primary-black);
    }
  }
  .login-form h3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    max-width: 350px;
    margin: 0 auto;
    align-items: center;
    color: var(--primary-black);
  }
  .input-container {
    display: flex;
    justify-content: space-between;
    gap: 0.3rem;
    border: 0.3px solid rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    border-radius: 10px;
    width: 90%;
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
  .login-input {
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
  .logged-in-container{
    text-align: center;
    margin-top: 7rem;
  }
  .logout-btn{
    background: var(--primary-Company-red);
    margin-top: 2rem;
    transition: var(--transition);
    &:hover{
      background: var(--primary-white);
    }
  }
`;
export default Wrapper;