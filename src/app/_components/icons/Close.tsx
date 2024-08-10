"use client";

import CloseIconSvg from "../../../../public/icons/close.svg";

interface CloseIconProps extends React.SVGProps<SVGSVGElement> {}

const CloseIcon: React.FC<CloseIconProps> = (props) => {
  return <CloseIconSvg {...props} />;
};

export default CloseIcon;
