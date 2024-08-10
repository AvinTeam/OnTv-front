"use client";

import ArrowIconSvg from "../../../../public/icons/arrow.svg";

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowIcon: React.FC<ArrowIconProps> = (props) => {
  return <ArrowIconSvg {...props} />;
};

export default ArrowIcon;
