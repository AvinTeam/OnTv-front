import { Header } from "@/app/_components/header/header";
import Sidebar from "@/app/_components/sidebar/sidebar";
import { ToastContainer } from "@/app/_components/tost-container/tost-container";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex bg-[#000] min-h-screen">
        <Sidebar />
        <main className="flex justify-center items-center flex-1 ">
          {children}
        </main>
        <ToastContainer />
      </div>
    </>
  );
}
