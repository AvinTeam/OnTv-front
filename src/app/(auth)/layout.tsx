import { API_URL } from "@/configs/global";
import { Footer } from "../_components/footer/footer";
import { ToastContainer } from "../_components/tost-container/tost-container";
import Header from "./_components/header";
async function gatAllMenu(position: string) {
  const res = await fetch(`${API_URL}menu?position=${position}`, {
    cache: "no-cache",
  });
  if (res.ok) return res.json();
}

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerMenueItems = await gatAllMenu("footer");
  return (
    <main
      className="w-screen h-screen overflow-auto min-h-screen grid grid-rows-[60px_1fr_auto]"
      style={{ background: "radial-gradient(black, transparent)" }}
    >
      <Header />
      {children}
      <Footer footerMenueItems={footerMenueItems?.menus}/>
      <ToastContainer />
    </main>
  );
}
