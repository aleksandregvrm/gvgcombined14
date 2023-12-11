import styled from 'styled-components';

const Wrapper = styled.main`
  margin-top: 3rem;
  min-height: 105vh;
  .all-products {
    width: 80%;
    min-height: 500px;
    border-radius: 2rem;
    padding: 1rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .product {
    width: 20%;
    min-width: 300px;
    min-height: 800px;
    display: flex;
    flex-direction: column;
  }
  .product-img-container {
    height: 500px;
    width: 100%;
  }
  .product-info {
    height: 40%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .shortened {
    max-height: 70px;
    overflow: hidden;
  }
  .delete-btn {
    background: #d54d4d;
    width: 20%;
    margin: 0.5rem auto;
  }
  .pagination {
    height: 100px;
  }
  .search-and-type {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-and-type input,
  select {
    height: 2rem;
    font-size: 1.3rem;
  }
  .edit-products {
    margin-top: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: var(--clr-grey-200);
    align-items: center;
    font-size: 1.2rem;
  }
  .edit-products form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
  }
  .edit-products input {
    height: 2rem;
    font-size: 1.2rem;
  }
  .edit-description {
    height: 130px;
    width: 300px;
    overflow: scroll;
    font-size: 1rem;
  }
  .all-emails {
    min-height: 330px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .emails-container {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  }
  .emails-container button {
    width: 100px;
    min-width: 20%;
  }
  .emails-container p {
    border: 2px solid var(--clr-grey-200);
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  .delete-email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    margin: 0 auto;
    width: 300px;
    height: 300px;
  }
  .delete-email button {
    background: #d54d4d;
  }
`;
export default Wrapper;