import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getCurrentUser, logout } from "../../services/auth";

const initialState = {
  user: null,
  loading: true,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCurrentUserAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUserAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getCurrentUserAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred.";
    });
    builder.addCase(logoutAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutAsync.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(logoutAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred.";
    });
  },
});

export const {} = userSlice.actions;
export const selectUserData = (state) => state.user;

export const getCurrentUserAsync = createAsyncThunk(
  "user/getCurrentUser",
  async () => {
    const response = await getCurrentUser();
    return response.data;
  }
);
export const logoutAsync = createAsyncThunk("user/logout", async () => {
  const response = await logout();
  return response.data;
});

export default userSlice.reducer;
