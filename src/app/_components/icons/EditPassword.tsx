"use client";

import EditPasswordIconSvg from "../../../../public/icons/edit-password.svg";

interface EditPasswordIconProps extends React.SVGProps<SVGSVGElement> {}

const EditPasswordIcon: React.FC<EditPasswordIconProps> = (props) => {
  return <EditPasswordIconSvg {...props} />;
};

export default EditPasswordIcon;
