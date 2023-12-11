import { links, additionalLinks } from "./links";
import blackCompanies from "./company-images";
import whiteCompanies from "./company-images-white";
import {
  customFetch,
  formatPrice,
  handleChange,
  toastStyles,
} from "./helper/helperFunctions";
import questions from "./questionsData";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from "./helper/localStorage";
import { snackImages, payImages } from "./other-images";

export {
  links,
  blackCompanies,
  whiteCompanies,
  snackImages,
  payImages,
  customFetch,
  formatPrice,
  handleChange,
  toastStyles,
  additionalLinks,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
  questions,
};
