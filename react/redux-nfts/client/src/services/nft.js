import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getNfts = async ({ pageSize = 6, searchStr, skip }) => {
  const response = await axios.post(`${BASE_URL}/nfts`, {
    pageSize,
    searchStr,
    skip,
  });
  return response.data;
};

export const deleteNft = async ({ id }) => {
  const response = await axios.delete(`${BASE_URL}/nfts/${id}`);
  return response.data;
};

// module.exports = {
//   getNfts,
//   deleteNft,
// };
