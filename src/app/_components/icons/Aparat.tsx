"use client";

import AparatIconSvg from "../../../../public/icons/aparat.svg";

interface AparatIconProps extends React.SVGProps<SVGSVGElement> {}

const AparatIcon: React.FC<AparatIconProps> = (props) => {
  return <AparatIconSvg {...props} />;
};

export default AparatIcon;
