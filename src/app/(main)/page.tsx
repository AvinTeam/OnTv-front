import React from "react";
import "../globals.css";
import MainContent from "./_components/MainContent/MainContent";

export default async function HomePage() {
  
  return (
    <main className="flex flex-col w-full overflow-x-scroll overflow-y-hidden bg-[#000000]">
      <MainContent />
      <div className="mb-16"></div>
    </main>
  );
}
