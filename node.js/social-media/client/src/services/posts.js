import { BASE_URL } from "@/constants";
import axios from "axios";

export async function getPosts({ pageParam }) {
  try {
    const response = await axios(`${BASE_URL}/posts?page=${pageParam}&limit=3`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}
export async function createPost({ data }) {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}
export async function editPost({ id, data }) {
  try {
    const response = await axios.put(`${BASE_URL}/posts/${id}`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function deletePost({ id }) {
  try {
    const response = await axios.delete(`${BASE_URL}/posts/${id}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function likePost({ id }) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.post(`${BASE_URL}/posts/${id}/like`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}
export async function toggleLike({ id }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/posts/${id}/like`,
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function dislikePost({ id }) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await axios.post(`${BASE_URL}/posts/${id}/dislike`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function getPostComments({ postId }) {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function createPostComment({ postId, content }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/posts/${postId}/comments`,
      {
        content,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function deletePostComment({ postId, commentId }) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await axios.delete(
      `${BASE_URL}/posts/${postId}/comments/${commentId}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function editPostComment({ postId, commentId, content }) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await axios.put(
      `${BASE_URL}/posts/${postId}/comments/${commentId}`,
      {
        content,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}
