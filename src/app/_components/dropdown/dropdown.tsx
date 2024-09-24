import React, { useEffect, useState } from "react";
import { ArrowTopIcon } from "../icons";

interface DropdownProps<T> {
  label: string;
  items: T[];
  displayKey: keyof T;
  showAllOption?: boolean;
  value?: T[keyof T] | null;
  onSelect: (value: T | null) => void;
}

const Dropdown = <T extends Record<string, any>>({
  label,
  items,
  displayKey,
  showAllOption = false,
  value,
  onSelect,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  useEffect(() => {
    if (value) {
      setSelectedValue(value[displayKey] as unknown as string);
    } else {
      setSelectedValue("");
    }
  }, [value, items, displayKey]);

  const handleItemClick = (item: T) => {
    if (item[displayKey] === "همه") {
      setSelectedValue("");
      onSelect(null);
    } else {
      setSelectedValue(item[displayKey] as unknown as string);
      onSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-full h-full">
      <input
        type="text"
        value={selectedValue}
        onClick={() => setIsOpen((prev) => !prev)}
        placeholder={label}
        readOnly
        style={{ border: "1px solid rgba(255,255,255,.12)" }}
        className="text-ellipsis cursor-pointer w-full whitespace-nowrap rounded-[0.8rem] p-[0.5rem] outline-none transition-all bg-transparent text-sm text-[#e8e8e8]"
      />
      <ArrowTopIcon
        width={19}
        height={19}
        className={`absolute top-2.5 left-2 ${!isOpen && "rotate-180"}`}
      />
      {isOpen && (
        <div className="absolute transition-all top-12 right-0 bg-[#1e1e1e] rounded-lg border p-2 border-[#272727] w-full lg:w-[180px] z-[10000000]">
          <ul className="flex flex-col gap-2 w-full">
            {showAllOption && (
              <li
                onClick={() => handleItemClick({ [displayKey]: "همه" } as T)}
                className="cursor-pointer transition-all py-1 px-2 w-full h-9 flex justify-start items-center hover:bg-base-50 rounded-md text-sm"
              >
                همه
              </li>
            )}
            {items.map((item) => (
              <li
                key={item[displayKey] as unknown as string}
                onClick={() => handleItemClick(item)}
                className="cursor-pointer transition-all py-1 px-2 w-full h-9 flex justify-start items-center hover:bg-base-50 rounded-md text-sm"
              >
                {item[displayKey]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
