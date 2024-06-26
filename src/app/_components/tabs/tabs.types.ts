// import { Tab } from "@/types/tab.type"
import React from "react";

export type Tab = {
    label: string;
    content: string | React.ReactNode
}
export type TabsProps = {
    tabs: Tab[]
}