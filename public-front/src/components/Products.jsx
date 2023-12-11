import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { SingleProduct, Pagination } from "./";
import {
  setActiveProduct,
  setBackgroundIsActive,
  changePage,
  submitLike,
} from "../features/products/productsSlice";

/* Products components where we load products data serves as an universal component for vending,snacks,coffee pages, and we also have a detailed SingleProduct  Component which appears if clicked on the details button with a black background dynamic elements ar handled using useDispatch in the features/menu menu.jsx file(redux) */

const Products = () => {
  const { products, error, numOfPages, page, productsType } =
    useSelector((store) => store.products);
  const { english } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  if (error) {
    return (
      <>
        <h2 className="product-error">
          There has been an error, please try again later
        </h2>
      </>
    );
  }
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          const { name, image, _id } = product;
          return (
            <article key={_id} className="product">
              <div className="box">
                <div className="image-container">
                  <img srcSet={image} alt={name} />
                  <button
                    className="details-button"
                    onClick={() => {
                      dispatch(setBackgroundIsActive());
                      dispatch(setActiveProduct(product));
                    }}
                  >
                    {!english ? "დეტალები..." : "Details"}
                  </button>
                </div>
                <div className="buttons-container">
                  {productsType !== "service" && (
                    <button onClick={() => dispatch(submitLike(_id))}>
                      <FaHeart />
                    </button>
                  )}
                </div>
              </div>
              <h3>{productsType !== "service" && name}</h3>
            </article>
          );
        })}
        {/* Single Product Components */}
        <SingleProduct />
        {/* Single Product end */}
      </div>
      {/* Pagination */}
      <Pagination numOfPages={numOfPages} changePage={changePage} page={page} />
      {/* end */}
    </>
  );
};
export default Products;
