"use client";

import HistoryIconSvg from "../../../../public/icons/history.svg";

interface HistoryIconProps extends React.SVGProps<SVGSVGElement> {}

const HistoryIcon: React.FC<HistoryIconProps> = (props) => {
  return <HistoryIconSvg {...props} />;
};

export default HistoryIcon;
