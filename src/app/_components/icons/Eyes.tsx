"use client";

import EyesIconSvg from "../../../../public/icons/eyes.svg";

interface EyesIconProps extends React.SVGProps<SVGSVGElement> {}

const EyesIcon: React.FC<EyesIconProps> = (props) => {
  return <EyesIconSvg {...props} />;
};

export default EyesIcon;
