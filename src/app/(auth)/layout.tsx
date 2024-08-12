import { Footer } from "../_components/footer/footer";
import { ToastContainer } from "../_components/tost-container/tost-container";
import Header from "./_components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="w-screen h-screen overflow-auto flex flex-col  items-center"
      style={{ background: "radial-gradient(black, transparent)" }}
    >
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </main>
  );
}
