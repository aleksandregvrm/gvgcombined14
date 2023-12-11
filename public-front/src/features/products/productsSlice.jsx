import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";
import { toastStyles } from "../../utils";

const limit = 4;
const fetchProducts = createAsyncThunk("firstSlice/fetchProducts", async ({productsType},thunkAPI) => {
  try {
    const {page,search,sort} = thunkAPI.getState().products;
    const response = await customFetch.get(`/products?productsType=${productsType}&limit=${limit}&page=${page}&sort=${sort}&search=${search}`);
    return {data:response.data,productsType};
  } catch (error) {
    throw error;
  }
});
const fetchInstagramProducts = createAsyncThunk('firstSlice/fetchInstagram',async() => {
  try {
    const response = await customFetch.get('/products/instagram');
    return {data:response.data}
  } catch (error) {
    throw error
  }
})
const submitLike = createAsyncThunk("firstSlice/submitLike", async(id) => {
  try {
    await customFetch.post(`/products/${id}`);
    toastStyles(true, "Submitted");
    return 
  } catch (error) {
    throw error;
  }
})

const initialState = {
  backgroundIsActive: false,
  activeProduct: {},
  productsType:'vending',
  search:'',
  sort:'newest',
  numOfPages: 0,
  numOfHits:0,
  page: 1,
  isLoading: false,
  editing: false,
  products: [],
  error:false,
  instagramProducts:[],
  instagramLoading:false,
  instagramError:false,
};

const productsSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    setBackgroundIsActive: (state, action) => {
      return { ...state, backgroundIsActive: true };
    },
    closeBackgroundIsActive: (state) => {
      return { ...state, backgroundIsActive: false };
    },
    setActiveProduct: (state, action) => {
      return { ...state, activeProduct: action.payload };
    },
    changePage: (state, action) => {
      return { ...state, page: action.payload };
    },
    changeSort: (state,action) => {
      return {...state, sort: action.payload, page:1};
    },
    searchProduct: (state,action) => {
      return {...state, search: action.payload, page:1}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const {data,productsType} = action.payload;
      const {products,numOfHits,numOfPages} = data;
      return{...state,error:false,
     isLoading: false,
      products: products,
      numOfPages: numOfPages,
      numOfHits: numOfHits,
      productsType,
      }
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(fetchInstagramProducts.pending, (state)=>{
      state.instagramLoading = true;
    });
    builder.addCase(fetchInstagramProducts.fulfilled, (state,action)=>{
      const { instagramData } = action.payload.data;
      state.instagramProducts = instagramData;
      state.instagramLoading = false;
    });
    builder.addCase(fetchInstagramProducts.rejected, (state) => {
      state.instagramLoading = false;
      state.instagramError = true;
    });
  },
});
export const {
  setBackgroundIsActive,
  closeBackgroundIsActive,
  setActiveProduct,
  changePage,
  changeSort,
  searchProduct
} = productsSlice.actions;

export { fetchProducts,fetchInstagramProducts, submitLike };

export default productsSlice.reducer;
