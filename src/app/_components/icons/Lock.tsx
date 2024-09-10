"use client";

import LockIconSvg from "../../../../public/icons/lock.svg";

interface LockIconProps extends React.SVGProps<SVGSVGElement> {}

const LockIcon: React.FC<LockIconProps> = (props) => {
  return <LockIconSvg {...props} />;
};

export default LockIcon;
