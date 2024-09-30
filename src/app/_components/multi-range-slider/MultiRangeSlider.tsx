"use client";
import React, { useCallback, useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import moment from "jalali-moment";

const RangeSliderComponent = ({
  onchange,
}: {
  onchange: (item: any) => void;
}) => {
  const [minValue, setMinValue] = useState(1292);
  const [maxValue, setMaxValue] = useState(moment().jYear());
  const [minValueLabel, setMinValueLabel] = useState(1292);
  const [maxValueLabel, setMaxValueLabel] = useState(moment().jYear());
  const [isJalali, setIsJalali] = useState(true);

  const setJalaliCalendar = () => {
    setIsJalali(true);
    setMinValueLabel(1292);
    setMaxValueLabel(moment().jYear());
  };
  const handleChange = useCallback(
    (e: any) => {
      setMinValue(e.minValue);
      setMaxValue(e.maxValue);
    },
    [minValue, maxValue, onchange, isJalali]
  );
  const setGregorianCalendar = () => {
    setMinValueLabel(1914);
    setMaxValueLabel(moment().year());
    setIsJalali(false);
  };
  useEffect(() => {
     if (minValue == minValueLabel && maxValue == maxValueLabel) {
      onchange({ minValue: null, maxValue: null });
      return;
    }
    onchange({ minValue: minValue, maxValue: maxValue });
  }, [minValue, maxValue]);

  return (
    <div className="p-1 flex flex-col items-center w-full">
      <div className="flex flex-row-reverse justify-between w-full">
        <div className="flex gap-1 mb-3">
          <button
            style={{
              borderRadius: "0px .8rem .8rem 0px",
              backgroundColor: "rgba(255, 255, 255, .08)",
              color: isJalali ? "#e8e8e8" : "#4b4b4b",
              boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0)",
            }}
            onClick={setJalaliCalendar}
            className={`px-3 hover:bg-[rgba(255, 255, 255, .09)] text-sm py-1.5`}
          >
            شمسی
          </button>
          <button
            onClick={setGregorianCalendar}
            style={{
              borderRadius: ".8rem 0px 0px .8rem",
              backgroundColor: "rgba(255, 255, 255, .08)",
              color: !isJalali ? "#e8e8e8" : "#4b4b4b",
              boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0)",
            }}
            className={`px-3 hover:bg-[rgba(255, 255, 255, .09)] text-sm py-1.5`}
          >
            میلادی
          </button>
        </div>
        <div className="text-nowrap text-[15px]">{`سال ${minValue} تا ${maxValue}`}</div>
      </div>

      <MultiRangeSlider
        min={minValueLabel}
        max={maxValueLabel}
        step={1}
        ruler={false}
        label={false}
        barInnerColor="rgb(245, 184, 63)"
        thumbLeftColor="rgb(245, 184, 63)"
        thumbRightColor="rgb(245, 184, 63)"
        minValue={minValue}
        onChange={handleChange}
        maxValue={maxValue}
        style={{
          direction: "ltr",
          width: "100%",
          border: "none",
          boxShadow: "none",
        }}
      />

      <div className="flex justify-between w-full max-w-lg text-sm">
        <span>{maxValueLabel}</span>
        <span>{minValueLabel}</span>
      </div>
    </div>
  );
};

export default RangeSliderComponent;
