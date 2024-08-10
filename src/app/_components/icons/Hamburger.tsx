"use client";

import HamburgerIconSvg from "../../../../public/icons/hamburger.svg";

interface HamburgerIconProps extends React.SVGProps<SVGSVGElement> {}

const HamburgerIcon: React.FC<HamburgerIconProps> = (props) => {
  return <HamburgerIconSvg {...props} />;
};

export default HamburgerIcon;
