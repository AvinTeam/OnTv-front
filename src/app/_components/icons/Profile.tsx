"use client";

import ProfileIconSvg from "../../../../public/icons/profile.svg";

interface ProfileIconProps extends React.SVGProps<SVGSVGElement> {}

const ProfileIcon: React.FC<ProfileIconProps> = (props) => {
  return <ProfileIconSvg {...props} />;
};

export default ProfileIcon;
