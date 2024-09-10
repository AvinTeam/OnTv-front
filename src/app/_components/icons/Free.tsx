"use client";

import FreeIconSvg from "../../../../public/icons/free.svg";

interface FreeIconProps extends React.SVGProps<SVGSVGElement> {}

const FreeIcon: React.FC<FreeIconProps> = (props) => {
  return <FreeIconSvg {...props} />;
};

export default FreeIcon;
