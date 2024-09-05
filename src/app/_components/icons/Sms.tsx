"use client";

import SmsIconSvg from "../../../../public/icons/sms.svg";

interface SmsIconProps extends React.SVGProps<SVGSVGElement> {}

const SmsIcon: React.FC<SmsIconProps> = (props) => {
  return <SmsIconSvg {...props} />;
};

export default SmsIcon;
