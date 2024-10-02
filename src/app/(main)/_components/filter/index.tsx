"use client";
import { Button } from "@/app/_components/button";
import { ArrowTopIcon, TickIcon } from "@/app/_components/icons";
import React, { useState, useEffect, useRef, useReducer } from "react";
import MultiRangeSlider from "@/app/_components/multi-range-slider/MultiRangeSlider";
import axios from "@/core/axios";
import Dropdown from "@/app/_components/dropdown/dropdown";
import { FilterState } from "@/types/types/filter.interface";
import useComponentVisible from "@/hocks/useComponentVisible";
import TagSelector from "./components/TagSelector";



const initialState: FilterState = {
  title: "",
  tag: [],
  service: null,
  date: "",
};

function Filter({
  service,
  onFilter,
}: {
  service: string | null;
  onFilter: (data: any) => void;
}) {
  const {
    ref: refTag,
    isComponentVisible: isTagVisible,
    setIsComponentVisible: setIsTagVisible,
  } = useComponentVisible(false);
  const {
    ref: refDate,
    isComponentVisible: isDateVisible,
    setIsComponentVisible: setIsDateVisible,
  } = useComponentVisible(false);

  const [serviceList, setServiceList] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const [fieldItems, fieldItemsDispatch] = useReducer(
    (prev: Partial<FilterState>, next: Partial<FilterState>) => ({
      ...prev,
      ...next,
    }),
    initialState
  );

  const serviceRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      (serviceRef.current &&
        serviceRef.current.contains(event.target as Node)) ||
      (refTag.current && refTag.current.contains(event.target as Node)) ||
      (refDate.current && refDate.current.contains(event.target as Node))
    ) {
      return;
    }

    setIsTagVisible(false);
    setIsDateVisible(false);
  };

  const getAllService = () => {
    axios.get(`service/publicIndex`).then(({ data }) => {
      setServiceList(data?.services);
    });
  };

  useEffect(() => {
    getAllService();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const result: any = serviceList.filter((item) => item.slug == service);
    fieldItemsDispatch({ service: result?.[0] || null });
  }, [service]);

  return (
    <div
      className="container w-[90%] lg:w-full z-[100] flex flex-col lg:flex-row select-none justify-between items-center p-[1.5rem] lg:p-[0.9rem] rounded-[1rem]"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(40px)",
      }}
    >
      <div className="flex w-full justify-center lg:justify-start flex-col lg:flex-row items-center gap-7">
        <div className="w-full lg:w-[135px] relative">
          <input
            type="text"
            value={fieldItems.title}
            onChange={(e) => fieldItemsDispatch({ title: e.target.value })}
            placeholder="عنوان"
            style={{ border: "1px solid rgba(255,255,255,.12)" }}
            className="text-ellipsis cursor-pointer w-full whitespace-nowrap rounded-[0.8rem] p-[0.5rem] outline-none transition-all relative bg-[rgba(0,0,0,0)] text-sm text-[#e8e8e8]"
          />
        </div>

        <TagSelector
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          fieldItemsDispatch={fieldItemsDispatch}
        />
        <div className="w-full lg:w-[135px] relative" ref={serviceRef}>
          <Dropdown
            items={serviceList}
            displayKey="name"
            showAllOption
            label="گروه اصلی :"
            value={
              fieldItems.service ||
              serviceList.filter((item) => item.slug == service)?.[0]
            }
            onSelect={(item) => {
              fieldItemsDispatch({ service: item || "all" });
            }}
          />
        </div>

        <div className="w-full lg:w-[135px] relative" ref={refDate}>
          <input
            type="text"
            value={fieldItems.date}
            onClick={(e) => {
              e.stopPropagation();
              setIsDateVisible(!isDateVisible);
              setIsTagVisible(false);
            }}
            placeholder="سال تولید:"
            readOnly
            style={{ border: "1px solid rgba(255,255,255,.12)" }}
            className="text-ellipsis cursor-pointer w-full whitespace-nowrap rounded-[0.8rem] p-[0.5rem] outline-none transition-all relative bg-[rgba(0,0,0,0)] text-sm text-[#e8e8e8]"
          />
          <ArrowTopIcon
            width={19}
            height={19}
            className={`${
              !isDateVisible && "rotate-180"
            } absolute top-2.5 left-2`}
          />

          <div
            ref={refDate}
            style={{
              display: isDateVisible ? "block" : "none",
              pointerEvents: isDateVisible ? "auto" : "none",
            }}
            className="absolute top-12 left-0 inset-1 bg-[#1e1e1e] rounded-lg border p-2 border-[#272727] w-full md:w-[500px] lg:w-[370px] h-36 z-[100]"
            onClick={(e) => e.stopPropagation()}
          >
            <MultiRangeSlider
              onchange={(date) => {
                if (!date?.minValue || !date?.maxValue) {
                  fieldItemsDispatch({
                    date: ``,
                  });
                  return;
                }
                fieldItemsDispatch({
                  date: `سال ${date.minValue} تا ${date.maxValue}`,
                });
              }}
            />
          </div>
        </div>
      </div>

      <Button
        className="w-full mt-2 lg:mt-0 lg:w-[150px] rounded-lg p-2 text-sm font-bold"
        onClick={() => onFilter(fieldItems)}
        style={{
          color: "rgba(12,12,12,.5)",
          background:
            fieldItems.date ||
            fieldItems.tag ||
            fieldItems.service ||
            fieldItems.title
              ? "#fff"
              : "rgba(255,255,255,.25)",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0)",
        }}
      >
        فیلتر
      </Button>
    </div>
  );
}

export default React.memo(Filter);
