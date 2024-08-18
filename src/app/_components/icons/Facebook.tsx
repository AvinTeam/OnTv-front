"use client";

import FacebookIconSvg from "../../../../public/icons/facebook.svg";

interface FacebookIconProps extends React.SVGProps<SVGSVGElement> {}

const FacebookIcon: React.FC<FacebookIconProps> = (props) => {
  return <FacebookIconSvg {...props} />;
};

export default FacebookIcon;
