import React from "react";
import Image from "next/image";
import LikeAndDisLike from "./LikeAndDisLike";
import { Comment } from "./comment.type";
import { convertToJalali } from "@/utils/functions";

interface CommentItemProps {
  item: Comment;
  renderComments: (comments: Comment[]) => JSX.Element[];
  setComment_id: (id: number | null) => void;
  handleReply: (name: string) => void;
}

function CommentItem({
  item,
  renderComments,
  setComment_id,
  handleReply,
}: CommentItemProps) {
  return (
    <div
      key={item?.id}
      className={`relative flex flex-col gap-2 justify-center items-start w-full h-auto ${ !item.children.length && `border-b`} pb-5 border-base-50 m-0 p-0`
          }    >
      <div className="flex gap-2 justify-center items-start w-full h-auto">
        <div className="-mr-2 rounded-full flex justify-start items-center p-0">
          <div className="text-white h-8 w-8 flex justify-center items-center p-0">
            <Image
              src={item?.creator?.avatar?.[0]?.url}
              alt="alt"
              width={0}
              height={0}
              className="w-full h-full overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
        <div className="p-0 m-0 w-[100%] h-full">
          <div className="flex gap-2 justify-start items-center p-0 m-0">
            <p className="text-xs -mt-1 text-white">{item?.creator?.name}</p>
            <p className="text-xs">{convertToJalali(item?.created_at)}</p>
          </div>
          <p
            style={{ wordSpacing: "-1px" }}
            className={`font-light text-justify w-full text-base-content-slider text-md mt-2 text-xs text-wrap leading-7`}
          >
            {item?.comment}
          </p>
        </div>
        <LikeAndDisLike item={item} />
        <div
          className="text-xs border px-[10px] transition-all hover:border-[#fff] hover:text-white py-[2px] rounded-md cursor-pointer"
          onClick={() => {
            setComment_id(item?.id);
            handleReply(item?.creator?.name);
          }}
        >
          پاسخ
        </div>
      </div>
      <div className="w-full h-full float-left">
        {item?.children && item.children.length > 0 && (
          <div className="[&>*]:mt-6 w-full h-full">
            {renderComments(item.children)}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentItem;
