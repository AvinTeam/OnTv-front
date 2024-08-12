import React from "react";
import Image from "next/image";
import logo from "../../../../public/images/android-chrome-192x192.png";
function Header() {
  return (
    <div className="w-full px-20">
      {" "}
      <Image
        src={logo}
        width={0}
        objectFit="contain"
        height={0}
        className="w-14 h-14 mt-3"
        alt="logo"
      />
    </div>
  );
}

export default Header;
