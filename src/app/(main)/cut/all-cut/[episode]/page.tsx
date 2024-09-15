import React from "react";
 import CutItems from "./components/CutItems";

async function page({ params }: { params: { episode: string } }) {
  return (
    <div className="bg-[black] container">
      <h3 className="my-9">لیست برش ها</h3>

      <CutItems params={params} />
    </div>
  );
}

export default page;
