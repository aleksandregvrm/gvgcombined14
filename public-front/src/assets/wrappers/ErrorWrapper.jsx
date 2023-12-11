import styled from "styled-components";

const Wrapper = styled.section`
margin: 0 auto;
width: 90%;
.error-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 80vh;
    min-height: 700px;
    }
    .img-container{
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .img-container img{
        margin-top: 2rem;
        cursor: pointer;
        height: 300px;
        width: 140px;
        transition: var(--transition);
        &:hover{
            scale: 1.1;
        }
    }
`;
export default Wrapper;