
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-gradient-to-b from-transparent via-violet-500 to-transparent">
        {children}
      </main>
    </>
  );
}
