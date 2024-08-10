"use client";

import HomeIconSvg from "../../../../public/icons/home.svg";

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {}

const HomeIcon: React.FC<HomeIconProps> = (props) => {
  return <HomeIconSvg {...props} />;
};

export default HomeIcon;
