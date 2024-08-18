"use client";

import CopyIconSvg from "../../../../public/icons/copy.svg";

interface CopyIconProps extends React.SVGProps<SVGSVGElement> {}

const CopyIcon: React.FC<CopyIconProps> = (props) => {
  return <CopyIconSvg {...props} />;
};

export default CopyIcon;
