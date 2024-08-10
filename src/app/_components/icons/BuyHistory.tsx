"use client";

import BuyHistoryIconSvg from "../../../../public/icons/buy-history.svg";

interface BuyHistoryIconProps extends React.SVGProps<SVGSVGElement> {}

const BuyHistoryIcon: React.FC<BuyHistoryIconProps> = (props) => {
  return <BuyHistoryIconSvg {...props} />;
};

export default BuyHistoryIcon;
