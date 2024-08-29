import React, { useState } from "react";
import LikeIcon from "@/app/_components/icons/Like";
import { API_URL } from "@/configs/global";
import axios from "@/core/axios";
import Toast from "@/app/_components/Tost/Tost";
 
function LikeAndDisLike({
  item,
}: {
  item: { dislikes_count: number; id: number; likes_count: number };
}) {
  const [likeStatus, setLikeStatus] = useState(0); // 0: not voted, 1: liked, -1: disliked
  const [likesCount, setLikesCount] = useState(item.likes_count);
  const [dislikesCount, setDislikesCount] = useState(item.dislikes_count);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState(0);

  const handleVote = (id: number, vote: number) => {
    setErrorMessage("")
    setStatus(0)
    axios
      .post(`${API_URL}comment/likes`, { comment_id: id, vote: vote })
      .then(({ data }) => {
        if (data.success) {
          if (vote === 1) {
            setLikesCount((prev) => prev + 1);
            if (likeStatus === -1) {
              setDislikesCount((prev) => prev - 1);
            }
          } else if (vote === -1) {
            setDislikesCount((prev) => prev + 1);
            if (likeStatus === 1) {
              setLikesCount((prev) => prev - 1);
            }
          } else {
            if (likeStatus === 1) {
              setLikesCount((prev) => prev - 1);
            } else if (likeStatus === -1) {
              setDislikesCount((prev) => prev - 1);
            }
          }
          setLikeStatus(vote);
          setIsError(false);
          setErrorMessage("");
        } else {
          setIsError(true);
          setErrorMessage(data.message);
          setStatus(400);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log(error.response)
        setErrorMessage(error.response?.data?.message);
        });
  };

  const handleDislike = (id: number) => {
    if (likeStatus === -1) {
      handleVote(id, 0); // Remove dislike
    } else {
      handleVote(id, -1); // Add dislike
    }
  };

  const handleLike = (id: number) => {
    if (likeStatus === 1) {
      handleVote(id, 0); // Remove like
    } else {
      handleVote(id, 1); // Add like
    }
  };

  return (
    <div className="relative">
      <div className="absolute -mt-1 flex gap-2 top-1 left-0 transition-all">
        {/* Dislike Icon */}
        <span
          className={`flex gap-2 rotate-180 scale-x-[-1]`}
          onClick={() => handleDislike(item?.id)}
        >
          <p className="rotate-180 scale-x-[-1]">{dislikesCount}</p>
          <LikeIcon
            width={18}
            fill={`${
              likeStatus === -1 ? "red" : "#fff"
            }`}
            height={18}
            className="transform cursor-pointer hover:scale-125 transition-transform duration-200"
          />
        </span>
        {/* Like Icon */}
        <span
          className={`flex cursor-pointer flex-row-reverse gap-2`}
          onClick={() => handleLike(item?.id)}
        >
          <LikeIcon
            width={18}
            fill={`${
              likeStatus === 1 ? "green" : "#fff"
            }`}
            height={18}
            className="transform cursor-pointer hover:scale-125 transition-transform duration-200"
          />
          {likesCount}
        </span>
      </div>
      {isError && <Toast message={errorMessage} type="error" />}
    </div>
  );
}

export default LikeAndDisLike;
