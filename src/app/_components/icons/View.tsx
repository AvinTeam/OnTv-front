"use client";

import ViewIconSvg from "../../../../public/icons/view.svg";

interface ViewIconProps extends React.SVGProps<SVGSVGElement> {}

const ViewIcon: React.FC<ViewIconProps> = (props) => {
  return <ViewIconSvg {...props} />;
};

export default ViewIcon;
