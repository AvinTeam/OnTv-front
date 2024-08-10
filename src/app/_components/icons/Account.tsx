"use client";

import AccountIconSvg from "../../../../public/icons/account.svg";

interface AccountIconProps extends React.SVGProps<SVGSVGElement> {}

const AccountIcon: React.FC<AccountIconProps> = (props) => {
  return <AccountIconSvg {...props} />;
};

export default AccountIcon;
