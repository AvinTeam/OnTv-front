export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen to-70% md:to-70% bg-gradient-to-bl from-gradient-second to-gradient-first overflow-auto flex justify-center items-center">
      {children}
    </main>
  );
}
