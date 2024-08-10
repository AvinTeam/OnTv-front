"use client";

import InstagramIconSvg from "../../../../public/icons/instagram.svg";

interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {}

const InstagramIcon: React.FC<InstagramIconProps> = (props) => {
  return <InstagramIconSvg {...props} />;
};

export default InstagramIcon;
