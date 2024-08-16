"use client";

import BadgeIconSvg from "../../../../public/icons/badge.svg";

interface BadgeIconProps extends React.SVGProps<SVGSVGElement> {}

const BadgeIcon: React.FC<BadgeIconProps> = (props) => {
  return <BadgeIconSvg {...props} />;
};

export default BadgeIcon;
