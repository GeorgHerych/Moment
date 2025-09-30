import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Адмін-панель'
};

export default function AdminPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Панель модерації</h1>
      <p className="text-muted-foreground">
        Тільки користувачі з роллю admin матимуть доступ до цього розділу. Тут ми реалізуємо
        перегляд репортів, блокування користувачів та модерацію контенту.
      </p>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-medium">Що далі?</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>• Фільтрація та пошук за статусом репорту.</li>
          <li>• Інструменти бану/розблокування профілів.</li>
          <li>• Логи дій модераторів.</li>
        </ul>
      </div>
    </section>
  );
}
