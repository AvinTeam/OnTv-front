"use client";

import LikeIconSvg from "../../../../public/icons/like.svg";

interface LikeIconProps extends React.SVGProps<SVGSVGElement> {}

const LikeIcon: React.FC<LikeIconProps> = (props) => {
  return <LikeIconSvg {...props} />;
};

export default LikeIcon;
