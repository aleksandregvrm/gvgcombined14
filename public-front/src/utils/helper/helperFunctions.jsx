import axios from "axios";
import { toast } from "react-toastify";

const productionUrl = "http://localhost:5002/api/v1";

export const customFetch = axios.create({
  baseURL: productionUrl,
});
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "gel",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
export const handleChange = ({ setProductValues, e }) => {
  const { name, value } = e.target;
  setProductValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
};

export const toastStyles = ( status,text ) => {
  if (status) {
    return toast.success(text, {
      style: {
        borderRadius: "20px",
        boxShadow: "0 4px 5px rgba(0, 0, 0, 0.6)",
      },
    });
  }
  return toast.error(text, {
    style: {
      borderRadius: "20px",
      boxShadow: "0 4px 5px rgba(0, 0, 0, 0.6)",
    },
  });
};
