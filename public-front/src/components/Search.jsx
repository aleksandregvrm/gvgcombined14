import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../features/products/productsSlice";

const Search = () => {
  const [productValues, setProductValues] = useState({ text: "" });
  const { productsType} = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let debounceTimer;
  const debounce = (func, delay) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
  };

  const clickHandler = () => {
    clearTimeout(debounceTimer);
    dispatch(searchProduct(productValues.text));
    if (productsType !== "service") {
      navigate(`/products/${productsType}`);
    } else {
      navigate("/service");
    }
  };
  const handleSearchChange = (e) => {
    setProductValues({ text: e.target.value });
    debounce(() => {
      dispatch(searchProduct(e.target.value));
    }, 1000);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleSearchChange}
        name="text"
        placeholder={`${productsType}...`}
        value={productValues.text}
      />
        <button onClick={clickHandler} type="button">
          <FaSearch />
        </button>
    </div>
  );
};
export default Search;
