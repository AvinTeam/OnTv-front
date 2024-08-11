import { ToastContainer } from "../_components/tost-container/tost-container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen dark:bg-[#000000] overflow-auto flex justify-center items-center">
      {children}
      <ToastContainer />

    </main>
  );
}
