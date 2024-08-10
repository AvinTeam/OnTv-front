"use client";

import BuySubscriptionIconSvg from "../../../../public/icons/buy-subscription.svg";

interface BuySubscriptionIconProps extends React.SVGProps<SVGSVGElement> {}

const BuySubscriptionIcon: React.FC<BuySubscriptionIconProps> = (props) => {
  return <BuySubscriptionIconSvg {...props} />;
};

export default BuySubscriptionIcon;
