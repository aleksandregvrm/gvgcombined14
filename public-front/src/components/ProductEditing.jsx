import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  uploadImage,
  uploadProduct,
  editProduct,
} from "../features/ad-controls/adminSlice";
import CustomInput from "./CustomInput";
import { handleChange } from "../utils";

const ProductEditing = () => {
  const { editing, editingInfo } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  const initialState = {
    name: "",
    company: "",
    category: "vending",
    price: "",
    stock:"",
    description: "",
    descriptionGe: "",
    additionalInfo: "",
    image: {},
  };
  const [productValues, setProductValues] = useState(initialState);
  useEffect(() => {
    if (!editing) {
      return setProductValues(initialState);
    }
    setProductValues((prevValues) => ({
      ...prevValues,
      ...editingInfo
    }));
  }, [editing]);

  const imageHandler = (e) => {
    setProductValues((prevValues) => ({
      ...prevValues,
      image: e.target.files[0],
    }));
  };
  const editHandlerSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      category,
      description,
      descriptionGe,
      additionalInfo,
      price,
      stock
    } = productValues;
    dispatch(
      editProduct({
        name,
        category,
        description,
        price,
        stock,
        descriptionGe,
        additionalInfo,
      })
    );
  };
  const uploadHandlerSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      category,
      description,
      descriptionGe,
      additionalInfo,
      price,
      company,
    } = productValues;
    dispatch(
      uploadProduct({
        name,
        category,
        description,
        descriptionGe,
        additionalInfo,
        price,
        company,
      })
    );
    setProductValues(initialState);
  };
  return (
    <div className="edit-products">
      <h2>{editing ? "Edit Product" : "Upload product"}</h2>
      <form>
        <div>
          <CustomInput
            labelName="name"
            name="name"
            type="text"
            value={productValues.name}
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        {!editing && (
          <div>
            <CustomInput
              labelName="Company"
              name="company"
              type="text"
              value={productValues.company}
              onChange={(e) => handleChange({ setProductValues, e })}
            />
          </div>
        )}
        <div>
          <label htmlFor="category">Category:</label>
          <select
            type="text"
            id="category"
            name="category"
            value={productValues.category}
            onChange={(e) => handleChange({ setProductValues, e })}
          >
            <option value="vending">Vending machines</option>
            <option value="coffee">Coffee machines</option>
            <option value="snacks-and-ingredients">
              Snacks and ingredients
            </option>
            <option value="service">Service</option>
          </select>
        </div>
        {!editing && (
          <div>
            <input type="file" name="image" onChange={imageHandler} />
            <button
              onClick={() => dispatch(uploadImage(productValues.image))}
              className="btn"
              type="button"
            >
              Upload Image
            </button>
          </div>
        )}
        <div>
          <CustomInput
            labelName="Price"
            name="price"
            type="number"
            value={productValues.price ? productValues.price : ""}
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        <div>
          <CustomInput
            labelName="Stock"
            name="stock"
            type="number"
            value={productValues.stock ? productValues.stock : ""}
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className="edit-description"
            id="description"
            name="description"
            value={productValues.description}
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        <div>
          <label htmlFor="descriptionGe">DescriptionGe:</label>
          <textarea
            className="edit-description"
            id="descriptionGe"
            name="descriptionGe"
            value={productValues.descriptionGe}
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        <div>
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            className="edit-description"
            id="additionalInfo"
            name="additionalInfo"
            value={productValues.additionalInfo}
            onChange={(e) => handleChange({ setProductValues, e })}
          />
        </div>
        {editing ? (
          <button className="btn" type="submit" onClick={editHandlerSubmit}>
            Save Changes
          </button>
        ) : (
          <button className="btn" type="submit" onClick={uploadHandlerSubmit}>
            Upload product
          </button>
        )}
      </form>
    </div>
  );
};
export default ProductEditing;
