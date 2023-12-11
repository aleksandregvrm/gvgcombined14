import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 3rem;
  .pages-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 450px;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .page-btn {
    font-size: 1rem;
    background: var(--primary-white);
    width: 1.7rem;
    box-shadow: none;
    transition: var(--transition);
    border: none;
    color: var(--primary-black);
    &:hover {
      background: var(--primary-Company-red);
    }
  }
  .active {
    background: var(--primary-Company-red);
  }
  @media screen and (min-width: 980px) {
    display: flex;
    justify-content: right;
    .pages-container {
      margin: 0;
      justify-content: left;
      padding-right: 4.5rem;
    }
  }
`;

export default Wrapper;