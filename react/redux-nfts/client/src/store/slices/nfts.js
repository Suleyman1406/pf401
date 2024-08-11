import { createSlice } from "@reduxjs/toolkit";
import { deleteNftAction, getNftsAction } from "../actions/nfts";

export const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    items: [],
    loading: true,
    error: null,
    totalCount: 0,
    hasMore: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNftsAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNftsAction.fulfilled, (state, action) => {
        const { nfts, hasMore, totalCount } = action.payload;
        state.items = [...state.items, ...nfts];
        state.hasMore = hasMore;
        state.totalCount = totalCount;
        state.loading = false;
        state.error = null;
      })
      .addCase(getNftsAction.rejected, (state, action) => {
        state.error = "Something Went Wrong!";
        state.loading = false;
      })
      .addCase(deleteNftAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteNftAction.fulfilled, (state, action) => {
        const { id } = action.payload;
        const idx = state.items.findIndex((p) => p.id === id);
        state.items.splice(idx, 1);
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteNftAction.rejected, (state, action) => {
        state.error = "Something Went Wrong!";
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = nftsSlice.actions;

export const selectNfts = (state) => state.nfts;

export default nftsSlice.reducer;
