import "../globals.css";
import type { Metadata } from "next";

import { Footer } from "../_components/footer/footer";
import { Header } from "../_components/header/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
