"use client";

import SearchIconSvg from "../../../../public/icons/search.svg";

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {}

const SearchIcon: React.FC<SearchIconProps> = (props) => {
  return <SearchIconSvg {...props} />;
};

export default SearchIcon;
