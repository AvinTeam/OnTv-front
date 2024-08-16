"use client";

import StarIconSvg from "../../../../public/icons/star.svg";

interface StarIconProps extends React.SVGProps<SVGSVGElement> {}

const StarIcon: React.FC<StarIconProps> = (props) => {
  return <StarIconSvg {...props} />;
};

export default StarIcon;
