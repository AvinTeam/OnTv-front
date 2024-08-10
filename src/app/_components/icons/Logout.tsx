"use client";

import HomeIconSvg from "../../../../public/icons/logout.svg";

interface LogoutIconProps extends React.SVGProps<SVGSVGElement> {}

const LogoutIcon: React.FC<LogoutIconProps> = (props) => {
  return <HomeIconSvg {...props} />;
};

export default LogoutIcon;
