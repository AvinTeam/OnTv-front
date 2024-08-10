"use client";

import SavedIconSvg from "../../../../public/icons/saved.svg";

interface SavedIconProps extends React.SVGProps<SVGSVGElement> {}

const SavedIcon: React.FC<SavedIconProps> = (props) => {
  return <SavedIconSvg {...props} />;
};

export default SavedIcon;
