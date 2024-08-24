import "../globals.css";
import type { Metadata } from "next";

import { Footer } from "../_components/footer/footer";
import { Header } from "../_components/header/header";
import { API_URL } from "@/configs/global";

async function gatAllMenu(position: string) {
  const res = await fetch(`${API_URL}menu?position=${position}`, {
    cache: "no-cache",
  });
  if (res.ok) return res.json();
}

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerMenueItems = await gatAllMenu("header");
  const footerMenueItems = await gatAllMenu("footer");
  return (
    <>
      <Header headerMenueItems={headerMenueItems?.menus} />
      {children}
      <Footer footerMenueItems={footerMenueItems?.menus} />
    </>
  );
}
