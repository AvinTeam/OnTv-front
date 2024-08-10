"use client";

import ProfileManagementIconSvg from "../../../../public/icons/profile-management.svg";

interface ProfileManagementIconProps extends React.SVGProps<SVGSVGElement> {}

const ProfileManagementIcon: React.FC<ProfileManagementIconProps> = (props) => {
  return <ProfileManagementIconSvg {...props} />;
};

export default ProfileManagementIcon;
