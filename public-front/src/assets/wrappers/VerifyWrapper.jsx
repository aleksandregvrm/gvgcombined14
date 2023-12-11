import styled from "styled-components";

const Wrapper = styled.section`
  height: 700px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  a {
    background: var(--primary-lighter-blackish-grey);
    transition: var(--transition);
    &:hover{
        scale: 1.07;
    }
  }
`;
export default Wrapper;