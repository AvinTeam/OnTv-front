"use client";

import SuccessStatusIconSvg from "../../../../public/icons/successStatus.svg";

interface SuccessStatusIconProps extends React.SVGProps<SVGSVGElement> {}

const SuccessStatusIcon: React.FC<SuccessStatusIconProps> = (props) => {
  return <SuccessStatusIconSvg {...props} />;
};

export default SuccessStatusIcon;
