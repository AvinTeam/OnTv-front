"use client";

import ArrowTopIconSvg from "../../../../public/icons/arrow-top.svg";

interface ArrowTopIconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowTopIcon: React.FC<ArrowTopIconProps> = (props) => {
  return <ArrowTopIconSvg {...props} />;
};

export default ArrowTopIcon;
