import { createSlice } from "@reduxjs/toolkit";
import vendingMachine1 from "../../assets/images/vending-machine-1.png";
import vendingMachine2 from "../../assets/images/vending-machine-2.png";
import vendingMachine4 from "../../assets/images/vending-machine-4.png";
import { snackImages,payImages } from "../../utils";

const imagesArray = [vendingMachine1, vendingMachine2,vendingMachine4];
const carouselImages = [...snackImages];
const moneyImages = [...payImages];
const initialState = {
  isLoading: false,
  editing: false,
  isNavbarOpen: false,
  isSearchBarOpen: false,
  isSubmenuOpen: false,
  activeImageIndex: 0,
  images: imagesArray,
  carouselImages:carouselImages,
  moneyImages:moneyImages,
  submenuCenter: 0,
  english:false,
  submenuPages: [
    { name: "vending", nameGe:'ვენდინგი', to: "products/vending" },
    { name: "coffee", nameGe: 'ყავა', to: "products/coffee" },
    { name: 'snacks', nameGe: 'სნექები', to:'products/snacks-and-ingredients'}
  ],
  editingInfo: {},
};

const menuSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      return { ...state, isNavbarOpen: !state.isNavbarOpen };
    },
    toggleSearchbar: (state) => {
      return { ...state, isSearchBarOpen: !state.isSearchBarOpen };
    },
    setSubmenuOpen: (state, action) => {
      return { ...state, isSubmenuOpen: true, submenuCenter: action.payload };
    },
    hideSubmenu: (state) => {
      return { ...state, isSubmenuOpen: false };
    },
    setActiveImageIndex: (state, action) => {
      return { ...state, activeImageIndex: action.payload };
    },
    changeLanguage: (state) => {
      return {...state, english: !state.english}
    }
  },
});

export const {
  toggleNavbar,
  toggleSearchbar,
  setSubmenuOpen,
  hideSubmenu,
  setActiveImageIndex,
  changeLanguage
} = menuSlice.actions;

export default menuSlice.reducer;
