import styled,{keyframes} from "styled-components";

const ProductLoader = keyframes`
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
  /* tags */
  .tags-btn{
    background: var(--clr-grey-100);
    transition: var(--transition);
    color: var(--primary-black);
    font-size: 0.9rem;
    border-radius: 15px;
    cursor: pointer;
    margin-left: 0.3rem;
  }
  .tags button:hover {
    background: var(--primary-Company-red);
  }
  .tags {
    text-align: center;
    margin: 2rem;
    padding: 1rem;
  }
  .tags h2 {
    margin-top: 3rem;
    text-align: center;
  }
  .selected {
    background: var(--primary-Company-red);
  }
  /* end */
  /* products Error */
  .product-error{
    color: var(--primary-black);
    text-align: center;
    margin-top: 4rem;
    padding: 1rem;
  }
  /* products Error end */
  /* products */
  .products-container {
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .product {
    width: 90%;
    max-width: 300px;
    border-radius: 1rem;
    background: var(--vending-catalog-blue);
    animation: ${ProductLoader} linear 1.2s;
    color: var(--primary-black);
  }
  .box {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .image-container {
    position: relative;
    margin-left: 2.5rem;
    width: 100%;
    height: 400px;
    transition: var(--transition);
    &:hover .details-button {
      opacity: 0.75;
    }
  }
  .box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .buttons-container {
    width: 20%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    background: var(--primary-white);
    height: fit-content;
    border-radius: 9px;
    color: var(--primary-black);
  }
  .buttons-container button {
    transition: var(--transition);
    min-width: 60px;
    border-radius: 9px;
    background: var(--primary-white);
    cursor: pointer;
    &:hover {
      background: var(--primary-Company-red);
    }
    border: none;
    width: 100%;
    padding: 1rem;
    text-decoration: none;
    font-size: 1rem;
  }
  .details-button {
    opacity: 0;
    border: none;
    transition: var(--transition);
    background: var(--primary-white);
    top: 50%;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%, -50%);
    text-decoration: none;
    font-size: 1rem;
    transition: var(--transition);
    border-radius: 9px;
    cursor: pointer;
    &:hover {
      background: var(--primary-Company-red);
    }
    position: absolute;
  }
  .product h3 {
    margin-top: 2rem;
    margin-left: 2.5rem;
    margin-bottom: 2rem;
  }
  /* end */
  @media screen and (min-width: 980px) {
    /* tags */
    .tags button {
      font-size: 1rem;
    }
    .products-container {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
    /* end */
  }
  @media screen and (min-width: 1400px) {
    min-height: 105vh;
  }
`;

export default Wrapper;
