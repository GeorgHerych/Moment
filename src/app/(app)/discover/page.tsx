import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Знайомства'
};

export default function DiscoverPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Відкривайте нові знайомства</h1>
        <p className="text-muted-foreground">
          У майбутніх ітераціях тут з’явиться свайп-дек із профілями користувачів поруч із вами.
          Зараз сторінка слугує заготовкою для подальшої логіки.
        </p>
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-medium">План реалізації</h2>
        <ol className="mt-4 space-y-2 text-muted-foreground">
          <li>1. Підбір кандидатів за віком, радіусом та вподобаннями.</li>
          <li>2. Інтерфейс свайпу/карток.</li>
          <li>3. Взаємні симпатії та переходи до чату.</li>
        </ol>
      </div>
    </section>
  );
}
