import Wrapper from "../assets/wrappers/SingleProductWrapper";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { closeBackgroundIsActive } from "../features/products/productsSlice";
import { formatPrice } from "../utils";

/* SingleProduct component which is triggered by clicking the details button the data of the component is determined by which product is being clicked on state related operations are handled in features/products folder productsSlice.jsx(redux) */

const SingleProduct = () => {
  const { backgroundIsActive, activeProduct } = useSelector(
    (state) => state.products
  );
  const { english } = useSelector(
    (state) => state.menu
  );
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className={backgroundIsActive ? "background active" : "background"}>
        <FaTimes
          className="close-button"
          onClick={() => {
            dispatch(closeBackgroundIsActive());
          }}
        />
        <div className="img-container">
          <img srcSet={activeProduct.image} alt="" />
        </div>
        <div className="text-container">
          <h2>{activeProduct.category !== 'service' &&activeProduct.name}</h2>
          {!activeProduct.price ? "" : <h3>{!english ? "ფასი :" : "Price :"} {formatPrice(activeProduct.price)}</h3>}
          {!activeProduct.stock ? (
            ''
          ) : (
            <h3>{!english ? "მარაგშია : " : "Stock : "}{activeProduct.stock}</h3>
          )}
          {!english ? 
          <p className="ge">{activeProduct.descriptionGe}</p> 
          :
          <p>{activeProduct.description}</p>
          }
          <p>{activeProduct.additionalInformation}</p>
        </div>
      </div>
    </Wrapper>
  );
};
export default SingleProduct;
