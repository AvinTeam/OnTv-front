"use client";

import SettingIconSvg from "../../../../public/icons/setting.svg";

interface SettingIconProps extends React.SVGProps<SVGSVGElement> {}

const SettingIcon: React.FC<SettingIconProps> = (props) => {
  return <SettingIconSvg {...props} />;
};

export default SettingIcon;
