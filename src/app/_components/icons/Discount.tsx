"use client";

import DiscountIconSvg from "../../../../public/icons/discount.svg";

interface DiscountIconProps extends React.SVGProps<SVGSVGElement> {}

const DiscountIcon: React.FC<DiscountIconProps> = (props) => {
  return <DiscountIconSvg {...props} />;
};

export default DiscountIcon;
