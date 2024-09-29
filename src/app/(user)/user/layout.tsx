import dynamic from "next/dynamic";
import { Header } from "@/app/_components/header/header";
import { ToastContainer } from "@/app/_components/tost-container/tost-container";
import { API_URL } from "@/configs/global";
const Sidebar = dynamic(() => import("@/app/_components/sidebar/sidebar"));
async function gatAllMenu(position: string) {
  const res = await fetch(`${API_URL}menu?position=${position}`, {
    cache: "no-cache",
  });
  if (res.ok) return res.json();
}
export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerMenueItems = await gatAllMenu("header");

  return (
    <div className="w-full min-h-screen">
      <Header headerMenueItems={headerMenueItems?.menus} />
      <div className="container flex overflow-y-scroll">
        <div className="bg-[#242323] rounded-2xl fixed hidden lg:block h-auto pb-5 mt-3 2xl:mt-6 w-[230px]">
          <Sidebar />
        </div>
        <div className="w-full pr-0 lg:pr-60 overflow-y-hidden">{children}</div>
        <ToastContainer />
      </div>
    </div>
  );
}
