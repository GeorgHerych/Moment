import { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Профіль'
};

export default function ProfilePage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold">Мій профіль</h1>
        <p className="text-muted-foreground">
          Тут з’явиться форма редагування профілю з використанням React Hook Form, Zod та
          завантаженням фотографій у MinIO/S3.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-medium">Основна інформація</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ім’я, дата народження, біо, інтереси — усе це ми додамо вже в наступній ітерації.
          </p>
        </div>
        <aside className="space-y-4">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-medium">Онбординг</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Не проходили онбординг? Розпочніть процес і заповніть обов’язкові дані.
            </p>
            <Link href="/onboarding" className={cn(buttonVariants({ size: 'sm' }), 'mt-3 w-full')}>
              Продовжити онбординг
            </Link>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-medium">Безпека</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Незабаром з’являться налаштування приватності, керування блокуваннями та експорт
              даних.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
