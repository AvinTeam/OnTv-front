// import { Tab } from "@/types/tab.type"
import React, { ButtonHTMLAttributes } from "react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingColor?: string;
    bgColor?: string
  }