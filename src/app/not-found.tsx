"use client"
import Image from "next/image";
import Link from "next/link";
import "./globals.css"; 
import notfound from "../../public/images/logo/not-found.png";

export default function NotFound() {
  return (
    <div className="notfound__wrapper">
      <Image
        src={notfound}
        alt="not-found"
        width={0}
        height={0}
        className="image"
      />
      <div className="text-container">
        <p className="text">
          فکر میکنیم راهتان را گم کرده باشید!
        </p>
        <Link href="/" className="link">
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
