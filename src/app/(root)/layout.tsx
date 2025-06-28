
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-gradient-to-b from-transparent via-orange-400 to-transparent">
        {children}
      </main>
    </>
  );
}
