export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen h-screen dark:bg-base-75 overflow-auto flex justify-center items-center">
      {children}
    </main>
  );
}
