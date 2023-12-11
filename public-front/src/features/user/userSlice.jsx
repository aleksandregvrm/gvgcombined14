import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastStyles } from "../../utils";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  customFetch,
  removeUserFromLocalStorage,
} from "../../utils";

const subscribeEmail = createAsyncThunk(
  "userSlice/subscribeEmail",
  async ( {email} ) => {
    try {
      const response = await customFetch.post("/user/subscribe-email",
        {email},
      );
      toastStyles(true,response.data.msg)
      return;
    } catch (error) {
      toastStyles(false,"Subscription failed, try again later...");
      throw error;
    }
  }
);
const sendMessage = createAsyncThunk(
  "userSlice/sendMessage",
  async ({ fullName, email, message }) => {
    try {
      const response = await customFetch.post("/user/user-message", {
        name: fullName,
        email,
        message,
      });
      toastStyles(true,response.data.msg);
    } catch (error) {
      toastStyles(false,"There was an error try again later...");
    }
  }
);
const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ email, password }) => {
    try {
      const response = await customFetch.post("/auth/login", {
        email,
        password,
      });
      toastStyles(true,`Welcome ${response.data.user.name}`);
      addUserToLocalStorage(response.data.user);
      return { data: response.data.user };
    } catch (error) {
      toastStyles(false,error.response.data.msg);
      throw error;
    }
  }
);
const logoutUser = createAsyncThunk("userSlice/logoutUser", async () => {
  try {
    const response = await customFetch.delete("/auth/logout");
    toastStyles(true,"Logged out");
    removeUserFromLocalStorage();
  } catch (error) {
    throw error;
  }
});
const showMe = createAsyncThunk("userSlice/showMeUser", async () => {
  try {
    await customFetch.get("/auth/showMe");
    return;
  } catch (error) {
    const user = getUserFromLocalStorage();
    const id = user.userId
    if (user) {
      removeUserFromLocalStorage();
      await customFetch.delete("/auth/autologout", { userId: id });
      throw error;
    }
    throw error;
  }
});

const initialState = {
  user: getUserFromLocalStorage().role,
  name: "",
  userId: "",
  isLoading: false,
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(subscribeEmail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(subscribeEmail.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(subscribeEmail.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(sendMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(sendMessage.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { name, role, userId } = action.payload.data;
      state.user = role;
      state.name = name;
      state.userId = userId;
      state.isLoading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = "";
      state.isLoading = false;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(showMe.rejected, (state) => {
      state.isLoading = false;
      state.user = "";
    });
  },
});
export const {} = userSlice.actions;

export { subscribeEmail, sendMessage, loginUser, logoutUser, showMe };
export default userSlice.reducer;
