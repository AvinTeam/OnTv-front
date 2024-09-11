"use client";

import BadgeFillIconSvg from "../../../../public/icons/badge-fill.svg";

interface BadgeFillIconProps extends React.SVGProps<SVGSVGElement> {}

const BadgeFillIcon: React.FC<BadgeFillIconProps> = (props) => {
  return <BadgeFillIconSvg {...props} />;
};

export default BadgeFillIcon;
