"use client";

import DownloadIconSvg from "../../../../public/icons/download.svg";

interface DownloadIconProps extends React.SVGProps<SVGSVGElement> {}

const DownloadIcon: React.FC<DownloadIconProps> = (props) => {
  return <DownloadIconSvg {...props} />;
};

export default DownloadIcon;
