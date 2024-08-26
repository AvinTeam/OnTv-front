"use client";

import SendIconSvg from "../../../../public/icons/send.svg";

interface SendIconProps extends React.SVGProps<SVGSVGElement> {}

const SendIcon: React.FC<SendIconProps> = (props) => {
  return <SendIconSvg {...props} />;
};

export default SendIcon;
