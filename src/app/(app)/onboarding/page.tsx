import { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Онбординг'
};

export default function OnboardingPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-semibold">Розкажіть про себе</h1>
      <p className="text-muted-foreground">
        У наступних ітераціях тут буде покроковий майстер налаштування профілю. Поки що ви
        можете перейти до сторінки профілю та заповнити дані вручну.
      </p>
      <div>
        <Link href="/profile" className={cn(buttonVariants({ size: 'lg' }))}>
          Перейти до профілю
        </Link>
      </div>
    </section>
  );
}
