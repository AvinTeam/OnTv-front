"use client";
import React from "react";
import { SkeletonProps } from "./skeleton.types";

export const Skeleton: React.FC<SkeletonProps> = ({
  type,
  count = 1,
  className,
  color = 50
}) => {
  const counts = Array.from({ length: count }, (_, index) => index + 1);

  const getSkeletonStyle = () => {
    switch (type) {
      case "circle":
        return "rounded-full";
      case "square":
        return "rounded-md";
      case "rectangle":
        return "rounded-md";
      default:
        return "rounded-md";
    }
  };

  return (
    <div
      className={`flex flex-wrap w-full h-full justify-center xl:justify-start mt-2 ${className}`}
    >
      {counts.map((item) => (
        <div
          key={`skeleton-${item}`}
          role="status"
          className={`flex-1 w-full h-full animate-pulse ${getSkeletonStyle()} ${className}`}
         
        >
          <div
            className={`flex w-full h-full items-center justify-center bg-base-${color} ${getSkeletonStyle()}`}
          
          ></div>
        </div>
      ))}
    </div>
  );
};
