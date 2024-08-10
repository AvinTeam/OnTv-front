"use client";

import TwitterIconSvg from "../../../../public/icons/twitter.svg";

interface TwitterIconProps extends React.SVGProps<SVGSVGElement> {}

const TwitterIcon: React.FC<TwitterIconProps> = (props) => {
  return <TwitterIconSvg {...props} />;
};

export default TwitterIcon;
