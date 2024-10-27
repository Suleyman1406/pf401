import axios from "axios";

export const login = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/auth/login`,
    data,
    {
      withCredentials: true,
    }
  );
};

export const register = async (data) => {
  return await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/auth/register`,
    data,
    { withCredentials: true }
  );
};

export const getCurrentUser = async () => {
  return await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/auth/current-user`,
    {
      withCredentials: true,
    }
  );
};

export const logout = async () => {
  return await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/auth/logout`,
    {},
    { withCredentials: true }
  );
};
