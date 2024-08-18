"use client";

import ShareIconSvg from "../../../../public/icons/share.svg";

interface ShareIconProps extends React.SVGProps<SVGSVGElement> {}

const ShareIcon: React.FC<ShareIconProps> = (props) => {
  return <ShareIconSvg {...props} />;
};

export default ShareIcon;
