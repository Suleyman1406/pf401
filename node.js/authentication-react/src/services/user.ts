import { User, UserRole } from "@/types";
import axios from "axios";

export const getUsers = async () => {
  return await axios.get<{ users: User[] }>(
    `${import.meta.env.VITE_APP_BASE_URL}/users`,
    {
      withCredentials: true,
    }
  );
};
export const blockUser = async (id: string) => {
  return await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/users/block/${id}`,
    {},
    {
      withCredentials: true,
    }
  );
};
export const unblockUser = async (id: string) => {
  return await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/users/unblock/${id}`,
    {},
    {
      withCredentials: true,
    }
  );
};
export const deleteUser = async (id: string) => {
  return await axios.delete(
    `${import.meta.env.VITE_APP_BASE_URL}/users/${id}`,
    {
      withCredentials: true,
    }
  );
};

export const handleUserRoleChange = async (
  id: string,
  role: Exclude<UserRole, UserRole.SuperAdmin>
) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/users/change-role/${id}`,
    {
      role,
    },
    {
      withCredentials: true,
    }
  );
};
