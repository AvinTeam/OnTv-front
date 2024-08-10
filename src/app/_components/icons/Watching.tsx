"use client";

import WatchingIconSvg from "../../../../public/icons/watching.svg";

interface WatchingIconProps extends React.SVGProps<SVGSVGElement> {}

const WatchingIcon: React.FC<WatchingIconProps> = (props) => {
  return <WatchingIconSvg {...props} />;
};

export default WatchingIcon;
