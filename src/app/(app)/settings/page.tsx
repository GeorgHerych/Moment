import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Налаштування'
};

export default function SettingsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Налаштування акаунта</h1>
      <p className="text-muted-foreground">
        У майбутніх релізах тут буде керування видимістю профілю, параметрами пошуку та
        сповіщеннями.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-lg font-medium">Видимість</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Обирайте між публічним, приватним або інкогніто-режимом.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-lg font-medium">Пошукові вподобання</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Гнучкі фільтри за віком, відстанню та інтересами вже в процесі розробки.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-lg font-medium">Сповіщення</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Розсилки, пуші та in-app повідомлення конфігуруватимуться тут.
          </p>
        </div>
      </div>
    </section>
  );
}
