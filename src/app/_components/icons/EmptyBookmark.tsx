"use client";

import EmptyBookmarkIconSvg from "../../../../public/icons/emptyBookmark.svg";

interface EmptyBookmarkIconProps extends React.SVGProps<SVGSVGElement> {}

const EmptyBookmarkIcon: React.FC<EmptyBookmarkIconProps> = (props) => {
  return <EmptyBookmarkIconSvg {...props} />;
};

export default EmptyBookmarkIcon;
