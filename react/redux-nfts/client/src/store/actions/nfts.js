import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteNft, getNfts } from "../../services/nft";

export const getNftsAction = createAsyncThunk("nfts/get", getNfts);

export const deleteNftAction = createAsyncThunk("nfts/delete", deleteNft);
