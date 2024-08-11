"use client";

import LoadingIconSvg from "../../../../public/icons/loading.svg";

interface LoadingIconProps extends React.SVGProps<SVGSVGElement> {}

const LoadingIcon: React.FC<LoadingIconProps> = (props) => {
  return <LoadingIconSvg {...props} />;
};

export default LoadingIcon;
