"use client"

import TvIconSvg from '../../../../public/icons/tv.svg';

interface TvIconProps extends React.SVGProps<SVGSVGElement> {}

const TvIcon: React.FC<TvIconProps> = (props) => {
  return <TvIconSvg {...props} />;
};

export default TvIcon;