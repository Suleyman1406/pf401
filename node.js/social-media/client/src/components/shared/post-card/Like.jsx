import { cn } from "@/lib/utils";
import { toggleLike } from "@/services/posts";
import { useMutation } from "@tanstack/react-query";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import Spinner from "../spinner";
import { useSelector } from "react-redux";
import { selectUserData } from "@/store/features/userSlice";

export const PostLike = ({ likes, postId }) => {
  const { user } = useSelector(selectUserData);
  const [likesState, setLikesState] = useState(likes);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: toggleLike,
    onSuccess: (response) => {
      if (response.likes) setLikesState(response.likes);
    },
    onError: (error) => {
      console.error("Error toggling like:", error);
    },
  });

  const isLiked = useMemo(
    () => likesState.includes(user?.id),
    [likesState, user?.id]
  );

  useEffect(() => {
    setLikesState(likes);
  }, [likes]);

  const handleLikeClick = useCallback(async () => {
    if (!user) return;
    await mutateAsync({ id: postId });
  }, [user, postId, mutateAsync]);

  return (
    <button
      disabled={isPending}
      onClick={handleLikeClick}
      className={cn(
        "flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1",
        isPending && "cursor-wait"
      )}
      aria-label={isLiked ? "Unlike post" : "Like post"}
    >
      {isPending ? (
        <Spinner size={20} />
      ) : (
        <svg
          className={cn("w-5 h-5", isLiked ? "fill-red-500" : "fill-current")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}
      <span>{likesState.length}</span>
    </button>
  );
};
