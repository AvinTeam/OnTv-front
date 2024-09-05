"use client";

import HelpIconSvg from "../../../../public/icons/help.svg";

interface HelpIconProps extends React.SVGProps<SVGSVGElement> {}

const HelpIcon: React.FC<HelpIconProps> = (props) => {
  return <HelpIconSvg {...props} />;
};

export default HelpIcon;
