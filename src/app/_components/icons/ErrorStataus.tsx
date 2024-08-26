"use client";

import ErrorStatusIconSvg from "../../../../public/icons/errorStatus.svg";

interface ErrorStatusIconProps extends React.SVGProps<SVGSVGElement> {}

const ErrorStatusIcon: React.FC<ErrorStatusIconProps> = (props) => {
  return <ErrorStatusIconSvg {...props} />;
};

export default ErrorStatusIcon;
