"use client";

import TelegramIconSvg from "../../../../public/icons/telegram.svg";

interface TelegramIconProps extends React.SVGProps<SVGSVGElement> {}

const TelegramIcon: React.FC<TelegramIconProps> = (props) => {
  return <TelegramIconSvg {...props} />;
};

export default TelegramIcon;
