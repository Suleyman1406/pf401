import { configureStore } from "@reduxjs/toolkit";
import nftsReducer from "./slices/nfts";

export default configureStore({
  reducer: {
    nfts: nftsReducer,
  },
});
