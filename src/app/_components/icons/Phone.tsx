"use client";

import PhoneIconSvg from "../../../../public/icons/phone.svg";

interface PhoneIconProps extends React.SVGProps<SVGSVGElement> {}

const PhoneIcon: React.FC<PhoneIconProps> = (props) => {
  return <PhoneIconSvg {...props} />;
};

export default PhoneIcon;
