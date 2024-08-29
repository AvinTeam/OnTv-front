import React from 'react';
import Image from 'next/image';
import LikeAndDisLike from './LikeAndDisLike';
import { Comment } from './comment.type';
import { convertToJalali } from '@/utils/functions';

interface CommentItemProps {
  item: Comment;
  renderComments: (comments: Comment[]) => JSX.Element[];
  setComment_id: (id: number | null) => void;
  handleReply: (name: string) => void;
}

function CommentItem({ item, renderComments, setComment_id, handleReply }: CommentItemProps) {
  return (
    <div key={item?.id} className="relative flex gap-2 justify-center items-start w-full h-auto">
      <div className="-mr-2 rounded-full flex justify-start items-center">
        <div className="text-white h-8 w-8 flex justify-center items-center">
          <Image
            src={item?.creator?.avatar?.[0]?.url}
            alt="alt"
            width={0}
            height={0}
            className="w-full h-full overflow-hidden rounded-full"
          />
        </div>
      </div>
      <div className="w-[96%]">
        <div className="flex gap-2 justify-start items-center">
          <p className="text-xs -mt-1 text-white">
            {item?.creator?.name}
          </p>
          <p className="text-xs">{convertToJalali(item?.created_at)}</p>
        </div>
        <p
          style={{ wordSpacing: '-1px' }}
          className={`font-light text-justify w-full text-base-content-slider text-md mt-2 text-xs text-wrap leading-7`}
        >
          {item?.comment}
        </p>

        {/* display comment children */}
        {item?.children && item.children.length > 0 && (
          <div className="mx-3 [&>*]:mt-6">
            {renderComments(item.children)}
          </div>
        )}
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
  );
}

export default CommentItem;
