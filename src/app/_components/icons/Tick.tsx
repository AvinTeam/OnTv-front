"use client";

import TickIconSvg from "../../../../public/icons/tick.svg";

interface TickIconProps extends React.SVGProps<SVGSVGElement> {}

const TickIcon: React.FC<TickIconProps> = (props) => {
  return <TickIconSvg {...props} />;
};

export default TickIcon;
