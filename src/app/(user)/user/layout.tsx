import { Header } from "@/app/_components/header/header";
import Sidebar from "@/app/_components/sidebar/sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex bg-[#000]">
        <Sidebar />
        <main className="flex justify-center items-center flex-1">
          {children}
        </main>
      </div>
    </>
  );
}
