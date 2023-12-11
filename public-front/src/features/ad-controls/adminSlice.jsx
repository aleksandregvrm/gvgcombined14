import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../../utils";
import { toastStyles } from "../../utils";

const limit = 3;
const fetchProductsAdmin = createAsyncThunk(
  "adminSlice/fetchProductsAdmin",
  async (_, thunkAPI) => {
    try {
      const { page, search, productsType } = thunkAPI.getState().admin;
      const response = await customFetch.get(
        `/products/adminProducts?productsType=${productsType}&limit=${limit}&page=${page}&search=${search}`
      );
      return { data: response.data };
    } catch (error) {
      throw error;
    }
  }
);
const uploadImage = createAsyncThunk(
  "adminSlice/uploadImage",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      const response = await customFetch.post(
        "/products/uploadImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toastStyles(true, "Image uploaded");
      return { data: response.data };
    } catch (error) {
      throw error
    }
  }
);
const uploadProduct = createAsyncThunk(
  "adminSlice/uploadProduct",
  async (
    {
      name,
      category,
      price,
      stock,
      description,
      descriptionGe,
      additionalInfo,
      company,
    },
    thunkApi
  ) => {
    const { uploadImageURL } = thunkApi.getState().admin;
    try {
      const response = await customFetch.post("/products", {
        name,
        category,
        price,
        stock,
        description,
        descriptionGe,
        additionalInfo,
        company,
        image: uploadImageURL,
      });
      toastStyles(true,"Product Uploaded, refresh the page to see the change")
    } catch (error) {
      toastStyles(false,"There has been an error with uploading a product");
      throw error
    }
  }
);
const editProduct = createAsyncThunk(
  "adminSlice/editProduct",
  async (
    {
      name,
      price,
      stock,
      description,
      descriptionGe,
      additionalInfo,
      category,
    },
    thunkAPI
  ) => {
    const { editingInfo } = thunkAPI.getState().admin;
    const { id } = editingInfo;
    try {
      await customFetch.patch(`/products/${id}`, {
        name,
        category,
        price,
        stock,
        description,
        descriptionGe,
        additionalInfo,
      });
      toastStyles(true,`${name} has been edited, refresh to see the change`);
    } catch (error) {
      toastStyles(false,"there has been an error with editing");
      throw error
    }
  }
);
const deleteProduct = createAsyncThunk(
  "adminSlice/deleteProduct",
  async ({ id }) => {
    try {
      await customFetch.delete(`/products/${id}`);
      toastStyles(true,"the product has been deleted, refresh to see the change");
    } catch (error) {
      toastStyles(false,"there has been an error with deleting");
      throw error;
    }
  }
);
const getAllSubscribedEmails = createAsyncThunk(
  "adminSlice/getEmails",
  async () => {
    try {
      const response = await customFetch.get("/user/subscribed-emails");
      toastStyles(true,"Emails delieverd");
      return { data: response.data };
    } catch (error) {
      toastStyles(false,"Error with getting emails");
      throw error;
    }
  }
);
const deleteSubscribedEmail = createAsyncThunk(
  "adminSlice/deleteEmail",
  async ({email}) => {
        try {
      const response = await customFetch.delete(`/user/subscribed-emails/${email}`,);
      toastStyles(true,"Email Deleted");
      return { data: response.data };
    } catch (error) {
      toastStyles(false,"Error with Deleting emails");
      throw error;
    }
  }
);
const initialEditingInfo = {
  name: "",
  category: "",
  price: "",
  stock:"",
  description: "",
  descriptionGe: "",
  additionalInfo: "",
};
const initialState = {
  activeProduct: {},
  productsType: "",
  search: "",
  uploadImageURL: "",
  numOfPages: 0,
  numOfHits: 0,
  subscribedEmails: { emails: [], subscriptionCount: 0 },
  page: 1,
  isLoading: false,
  editing: false,
  editingInfo: initialEditingInfo,
  products: [],
  error: false,
};
const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    changePage: (state, action) => {
      return { ...state, page: action.payload };
    },
    updateSearch: (state, action) => {
      return { ...state, search: action.payload, page: 1 };
    },
    updateSelection: (state, action) => {
      return { ...state, productsType: action.payload, page: 1 };
    },
    startEditing: (state, action) => {
      const {
        name,
        price,
        stock,
        description,
        descriptionGe,
        additionalInfo,
        category,
        id,
      } = action.payload;
      return {
        ...state,
        editing: true,
        editingInfo: {
          name,
          price,
          stock,
          description,
          descriptionGe,
          additionalInfo,
          category,
          id,
        },
      };
    },
    cancelEditing: (state) => {
      return { ...state, editing: false };
    },
  },
  extraReducers: (builder) => {

    builder.addCase(fetchProductsAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductsAdmin.fulfilled, (state, action) => {
      const { data } = action.payload;
      const { products, numOfHits, numOfPages } = data;
      return {
        ...state,
        error: false,
        isLoading: false,
        products,
        numOfPages,
        numOfHits,
      };
    });
    builder.addCase(fetchProductsAdmin.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(uploadImage.pending, (state) => {
      state.isLoading = true;
    });
    // Get Admin Products End
    // Upload Image
    builder.addCase(uploadImage.fulfilled, (state, action) => {
      const { src } = action.payload.data;
      state.uploadImageURL = src;
      state.isLoading = false;
    });
    builder.addCase(uploadImage.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    // Upload Image End
    // Upload Product
    builder.addCase(uploadProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(uploadProduct.fulfilled, (state) => {
      state.isLoading = false;
      state.uploadImageURL = "";
    });
    builder.addCase(uploadProduct.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    // Upload Product End
    // Edit Product
    builder.addCase(editProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editProduct.fulfilled, (state) => {
      return { ...state, isLoading: false, editing: false, editingInfo: {} };
    });
    builder.addCase(editProduct.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    // Edit Product End
    // Get subscribed Emails
    builder.addCase(getAllSubscribedEmails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllSubscribedEmails.fulfilled, (state, action) => {
      const { emails, subscriptionCount } = action.payload.data;
      state.subscribedEmails = { emails, subscriptionCount };
      state.isLoading = false;
    });
    builder.addCase(getAllSubscribedEmails.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    // Get subscribed Emails End
  },
});
export const {
  changePage,
  updateSearch,
  updateSelection,
  startEditing,
  cancelEditing,
} = adminSlice.actions;
export {
  fetchProductsAdmin,
  uploadImage,
  uploadProduct,
  editProduct,
  deleteProduct,
  getAllSubscribedEmails,
  deleteSubscribedEmail,
};
export default adminSlice.reducer;
