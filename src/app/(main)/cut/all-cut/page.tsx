import React from "react";
 import CutItems from "./components/CutItems";

async function page() {
  return (
    <div className="bg-[black] container">
      <h3 className="my-9">لیست برش ها</h3>

      <CutItems />
    </div>
  );
}

export default page;
