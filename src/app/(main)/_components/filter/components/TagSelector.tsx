import React, { useState, useEffect } from "react";
import { ArrowTopIcon, TickIcon } from "@/app/_components/icons";
import axios from "@/core/axios";
import useComponentVisible from "@/hocks/useComponentVisible";

type ITag = {
  id: number;
  name: string;
  is_active: number;
  important: number;
  image: any[];
};

type TagSelectorProps = {
  selectedTags: ITag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<ITag[]>>;
  fieldItemsDispatch: any;
};

const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTags,
  setSelectedTags,
  fieldItemsDispatch,
}) => {
  const [tagList, setTagList] = useState<ITag[]>([]);
  const {
    ref: refTag,
    isComponentVisible: isTagVisible,
    setIsComponentVisible: setIsTagVisible,
  } = useComponentVisible(false);

  useEffect(() => {
    axios.get(`tag/important`).then(({ data }) => {
      setTagList(data?.posts?.data);
    });
  }, []);

  const handleTagSelect = (tag: ITag) => {
    if (selectedTags.some((t) => t.id === tag.id)) {
      setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
    } else if (selectedTags.length < 3) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  useEffect(() => {
    fieldItemsDispatch({ tag: selectedTags });
  }, [selectedTags]);

  return (
    <div className="w-full lg:w-[135px] relative" ref={refTag}>
      <input
        type="text"
        onClick={(e) => {
          e.stopPropagation();
          setIsTagVisible(!isTagVisible);
        }}
        value={selectedTags.map((tag) => tag.name).join(" - ")}
        placeholder="هشتگ‌ها:"
        readOnly
        style={{ border: "1px solid rgba(255,255,255,.12)" }}
        className="text-ellipsis cursor-pointer w-full whitespace-nowrap rounded-[0.8rem] p-[0.5rem] outline-none transition-all relative bg-[rgba(0,0,0,0)] text-sm text-[#e8e8e8]"
      />
      <ArrowTopIcon
        width={19}
        height={19}
        className={`${!isTagVisible && "rotate-180"} absolute top-2.5 left-2`}
      />

      <div
        ref={refTag}
        style={{
          display: isTagVisible ? "block" : "none",
          pointerEvents: isTagVisible ? "auto" : "none",
        }}
        className="absolute top-12 right-0 bg-[#1e1e1e] rounded-lg border p-2 border-[#272727] w-full md:w-[500px] min-h-48 z-[100]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          }}
        >
          {tagList.map((item: ITag) => (
            <label key={item.id} className="flex mb-2 items-center gap-1">
              <div className="relative">
                <input
                  type="checkbox"
                  className="w-5 h-5 appearance-none border rounded-[3px] border-[rgba(255,255,255,.25)] bg-transparent checked:border-[#3899a0] checked:bg-transparent transition-colors duration-300 ease-in-out focus:ring-0"
                  checked={selectedTags.some((t) => t.id === item.id)}
                  onChange={() => handleTagSelect(item)}
                  disabled={
                    selectedTags.length === 3 &&
                    !selectedTags.some((t) => t.id === item.id)
                  }
                />
                {selectedTags.some((t) => t.id === item.id) && (
                  <TickIcon
                    width={15}
                    fill="#3899a0"
                    height={15}
                    className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}
              </div>
              <p
                className={`text-[13px] mr-1 text-nowrap mb-[8px] ${
                  selectedTags.length === 3
                    ? "text-[#737373]"
                    : "text-[#E8E8E8]"
                }`}
              >
                {item.name}
              </p>
            </label>
 
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagSelector;
