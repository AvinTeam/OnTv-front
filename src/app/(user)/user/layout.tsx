import { Header } from "@/app/_components/header/header";
import Sidebar from "@/app/_components/sidebar/sidebar";
import { ToastContainer } from "@/app/_components/tost-container/tost-container";
import { API_URL } from "@/configs/global";
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
       <div className="container h-full flex">
        <Sidebar />
        <main className="flex w-full h-auto justify-center items-center ">
          {children}
        </main>
        <ToastContainer />
      </div>
    </div>
  );
}
