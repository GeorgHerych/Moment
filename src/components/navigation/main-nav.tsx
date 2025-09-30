'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/onboarding', label: 'Онбординг' },
  { href: '/discover', label: 'Знайомства' },
  { href: '/matches', label: 'Матчі' },
  { href: '/profile', label: 'Профіль' },
  { href: '/settings', label: 'Налаштування' },
  { href: '/admin', label: 'Адмін' }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-semibold">
          <span>{siteConfig.shortName}</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith(item.href) ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm">
          <Link href="/auth/signin" className="hover:text-foreground">
            Увійти
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/auth/signin" className="hover:text-foreground">
            Зареєструватися
          </Link>
        </div>
      </div>
    </header>
  );
}
