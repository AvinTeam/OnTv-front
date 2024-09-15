"use client";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <div className="flex bg-white justify-center items-center w-full h-screen">
      <div className="flex justify-center items-center flex-col">
        <p className="text-input-text">فکر میکنیم راهتان را گم کرده باشید!</p>
        <Link href="/" className="w-[200px] mt-4 rounded-lg text-center py-1.5 px-2 bg-primary text-white">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
