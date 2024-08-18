"use client";

import LinkedinIconSvg from "../../../../public/icons/linkedin.svg";

interface LinkedinIconProps extends React.SVGProps<SVGSVGElement> {}

const LinkedinIcon: React.FC<LinkedinIconProps> = (props) => {
  return <LinkedinIconSvg {...props} />;
};

export default LinkedinIcon;
