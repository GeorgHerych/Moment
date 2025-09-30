import Link from 'next/link';
import { MainNav } from '@/components/navigation/main-nav';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-xs font-medium uppercase tracking-wide text-secondary-foreground">
            Ласкаво просимо до {siteConfig.name}
          </span>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            Мить, коли справжні знайомства стають можливими
          </h1>
          <p className="text-balance text-lg text-muted-foreground sm:text-xl">
            Створіть профіль, знайдіть людей поруч і почніть спілкуватися у безпечному та
            сучасному середовищі.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/onboarding" className={cn(buttonVariants({ size: 'lg' }))}>
              Розпочати
            </Link>
            <Link
              href="/discover"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              Подивитися, як це працює
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 text-sm text-muted-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Усі права захищено.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Політика конфіденційності
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Умови користування
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
