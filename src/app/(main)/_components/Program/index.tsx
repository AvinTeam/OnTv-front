import { SpecialCard } from "@/app/_components/cards/special-card";
import { SliderTitle } from "@/app/_components/slider-title";
import { Slider } from "@/app/_components/slider/slider";
import React from "react";

function Program({ data }: any) {
  return (
    <div className="container px-3 md:px-0  overflow-auto py-2 mb-4">
      <SliderTitle title={data?.title} link={`/show-onten/${data?.program?.[0]?.program?.slug}`} />
      <div className="h-[230px]">
        <Slider
          Component={SpecialCard}
          data={data?.program?.[0]?.episodes}
          displayCount={5}
          isShowIcon
          path="show-on"
        />
      </div>
    </div>
  );
}

export default Program;
