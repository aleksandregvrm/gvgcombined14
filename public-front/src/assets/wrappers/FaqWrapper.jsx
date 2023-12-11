import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 800px;
  padding: 1rem;
  padding-bottom: 3rem;
  /* margin-top: 2rem; */
  /* margin-bottom: 3rem; */
  margin-bottom: -3rem;
  background: var(--clr-grey-200);
  .questions-section{
    padding: 2rem 0;
    /* max-width: 800px; */
    margin: 0 auto;
    border-radius: 1.5rem;
  }
  .questions-header{
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .question {
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-3);
    margin-bottom: 2rem;
  }

  .question p {
    line-height: 2;
    margin-top: 1rem;
    background: var(--primary-white);
    padding: 1rem;
    border-radius: 1rem;
  }
  .question header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .question h4 {
    font-weight: 500;
    line-height: 1.5;
  }
  .question-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    color: var(--primary-Company-red);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    align-self: flex-start;
    min-width: 2rem;
  }
`;
export default Wrapper;