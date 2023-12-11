import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import {
  startEditing,
  cancelEditing,
  deleteProduct,
} from "../features/ad-controls/adminSlice";
const AllProductsAd = () => {
  const { products, loading, editing } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  if (loading) {
    return (
      <div className="all-products">
        <Loading />
      </div>
    );
  }
  if (!products) {
    return (
      <div className="all-products">
        <h2>No Products available</h2>
      </div>
    );
  }
  return (
    <div className="all-products">
      {products.map((product) => {
        const {
          image,
          category,
          name,
          price,
          likes,
          stock,
          description,
          descriptionGe,
          additionalInfo,
          _id: id,
        } = product;
        return (
          <article className="product" key={id}>
            <div className="product-img-container">
              <img className="product-img" srcSet={image} alt="" />
            </div>
            <div className="product-info">
              <h4>Name/Service : {name}</h4>
              <h4>Category: {category}</h4>
              <h4>Price: {price}</h4>
              {likes ?  <h4>Likes : {likes}</h4> : ''}
              {stock && <h4>Stock : {stock}</h4>}

              <p className="shortened">Description: {description}</p>
              <p className="shortened">DescriptionGe: {descriptionGe}</p>
              <p className="shortened">Addition Info: {additionalInfo}</p>
            </div>
            {!editing ? (
              <button
                onClick={() =>
                  dispatch(
                    startEditing({
                      name,
                      category,
                      price,
                      stock,
                      description,
                      id,
                      descriptionGe,
                      additionalInfo,
                    })
                  )
                }
                className="btn"
              >
                Edit
              </button>
            ) : (
              <button className="btn" onClick={() => dispatch(cancelEditing())}>
                Cancel Editing
              </button>
            )}
            <button
              onClick={() => dispatch(deleteProduct({ id }))}
              className="btn delete-btn"
            >
              Delete
            </button>
          </article>
        );
      })}
    </div>
  );
};
export default AllProductsAd;
