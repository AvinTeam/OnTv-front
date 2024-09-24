"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "@/core/axios";
import Toast from "@/app/_components/Tost/Tost";
import { ArrowTopIcon, LoadingIcon, SendIcon } from "@/app/_components/icons";
import { API_URL } from "@/configs/global";
import { Comment } from "./comment.type";
import { Button } from "@/app/_components/button";
import Modal from "@/app/_components/modal/modal";
import { useRouter } from "next/navigation";
import CommentItem from "./CommentItem";
import { useUserStore } from "@/stores/user.store";
import Loading from "./Loading";

function CommentBox({ id, type }: { id: number; type: "episode" | "program" }) {
  const user = useUserStore((store) => store.user);
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment_id, setComment_id] = useState<number | null>();
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [loadingComment, setLoadingComment] = useState<boolean>(false);
  const targetRef = useRef<any>(null);
  const loadMore = () => {
    if (!hasMore || loading) return;
    setLoading(true);
    axios
      .get(`${API_URL}${type}/${id}/comments?page=${currentPage + 1}`)
      .then(({ data }) => {
        setLoading(false);
        setComments((prevComments) => [
          ...prevComments,
          ...data?.comments?.data,
        ]);
        setCurrentPage((prevPage) => prevPage + 1);
        setHasMore(
          data?.comments?.meta?.current_page < data?.comments?.meta?.last_page
        );
      });
  };

  const handleSubmit = () => {
    setLoadingComment(true);
    if (!user) {
      setOpen(true);
      return;
    }
    const params = {
      comment: comment,
      ...(comment_id ? { parent_id: comment_id } : {}),
    };
    setIsSuccess(false);
    axios.post(`${API_URL}${type}/storeComment/${id}`, params).then(() => {
      setIsSuccess(true);
      setLoadingComment(false);
      setComment("");
      setComment_id(null);
      setReplyTo(null);
    });
  };
  const handleReply = (name: string) => {
    setReplyTo(name);
    scrollToInput();
  };
  const scrollToInput = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    axios
      .get(`${API_URL}${type}/${id}/comments?page=${currentPage}`)
      .then(({ data }) => {
        setLoading(false);
        setComments(data?.comments?.data);
        setHasMore(
          data?.comments?.meta?.current_page < data?.comments?.meta?.last_page
        );
      });
  }, [id, type]);
  const renderComments = (comments: Comment[], depth = 0) => {
    return comments.map((item: Comment) => (
      <CommentItem
        key={item?.id}
        item={item}
        renderComments={renderComments}
        setComment_id={setComment_id}
        handleReply={handleReply}
        depth={depth}
      />
    ));
  };
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <>
          <div className="mt-2 text-[#e6e6e6]">
            برای ثبت کامنت باید ابتدا در سایت ثبت نام کنید
          </div>
          <Button
            className="mt-4 bg-primary py-2 text-white"
            onClick={() => router.push("/signin")}
          >
            ثبت نام{" "}
          </Button>
        </>
      </Modal>
      <div id="top" className="pt-9" ref={targetRef}></div>
      <div className="flex flex-col justify-start items-start gap-0 w-full pr-2 border-b-[1px] border-b-[#333]">
        {isSuccess && (
          <Toast message="نظر شما با موفقیت ثبت شد" type="success" />
        )}

        <h3 className="text-sm lg:text-[1rem] text-white mb-4 pb-0">
          دیدگاه بینندگان
        </h3>
        <div className="relative h-[80px] px-2 md:h-[100px] flex items-center justify-start gap-2 rounded-md w-full">
          <figure className="bg-[#f4511e] h-8 w-8  rounded-full flex justify-center items-center">
            <div className="text-white">�</div>
          </figure>

          {replyTo && (
            <>
              <div className="absolute right-12 text-white -top-2 text-xs lg:text-sm">
                در پاسخ به {replyTo} :
              </div>
              <div
                className="absolute text-white left-5 -top-2 text-xs lg:text-smcursor-pointer"
                onClick={() => {
                  setComment_id(null);
                  setReplyTo(null);
                  setComment("");
                }}
              >
                انصراف
              </div>
            </>
          )}
          <div className="relative w-full peer rounded-md overflow-auto ">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full text-sm pt-2 pr-2 pb-4 rounded-md peer font-light h-[40px] flex justify-center items-center focus:outline-none focus:bg-white focus:text-[#424242] overflow-hidden bg-[#424242] text-[#fff]"
              placeholder="دیدگاه خود دار وارد کنید"
            />
            <span
              onClick={handleSubmit}
              className={`absolute ${
                !comment?.length && loadingComment
                  ? "pointer-events-none cursor-default"
                  : "pointer-events-auto"
              }  peer-focus:bg-white group-focus:text-black  overflow-hidden cursor-pointer rotate-180 top-0 left-0 bg-[#3b3b3b] h-full flex justify-center items-center transition-colors duration-300`}
            >
              <SendIcon fill="#d0d0d0" width={34} height={26} />
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 break-words flex flex-col justify-start gap-10 items-start w-full h-full px-4">
        {renderComments(comments)}
        {loading && currentPage == 1 ? (
          <>
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </>
        ) : (
          <div className="w-full flex justify-center items-center">
            {hasMore && (
              <Button
                onClick={loadMore}
                style={{ width: "180px", height: "40px" }}
                className={`text-white text-center bg-primary cursor-pointer mb-4 rounded-md ${
                  !loading ? "pointer-events-auto" : "pointer-events-none"
                }`}
              >
                <div className="flex gap-2 justify-center items-center">
                  <p>مشاهده بیشتر</p>
                  <span>
                    {loading ? (
                      <LoadingIcon
                        fill="#fff"
                        className="animate-spin "
                        width={28}
                        height={28}
                      />
                    ) : (
                      <ArrowTopIcon
                        fill="#fff"
                        className="rotate-180"
                        width={28}
                        height={28}
                      />
                    )}
                  </span>
                </div>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CommentBox;
