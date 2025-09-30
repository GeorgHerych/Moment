import { MainNav } from '@/components/navigation/main-nav';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="container flex-1 py-10">{children}</main>
    </div>
  );
}
