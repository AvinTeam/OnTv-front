"use client";

import WhatsappIconSvg from "../../../../public/icons/whatsapp.svg";

interface WhatsappIconProps extends React.SVGProps<SVGSVGElement> {}

const WhatsappIcon: React.FC<WhatsappIconProps> = (props) => {
  return <WhatsappIconSvg {...props} />;
};

export default WhatsappIcon;
