import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Матчі'
};

export default function MatchesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Ваші майбутні матчі</h1>
      <p className="text-muted-foreground">
        Тут буде перелік взаємних симпатій із можливістю розпочати чат. Реалізацію заплановано на
        наступні ітерації.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="h-32 rounded-md bg-muted" />
            <div className="mt-3 space-y-1">
              <h3 className="text-lg font-medium">Майбутній матч #{index + 1}</h3>
              <p className="text-sm text-muted-foreground">
                Зарезервовано для реальних людей, з якими ви отримаєте взаємний лайк.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
