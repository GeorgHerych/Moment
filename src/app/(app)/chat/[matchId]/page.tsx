import { Metadata } from 'next';
interface ChatPageProps {
  params: {
    matchId: string;
  };
}

export const metadata: Metadata = {
  title: 'Чат'
};

export default function ChatPage({ params }: ChatPageProps) {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Чат #{params.matchId}</h1>
        <p className="text-muted-foreground">
          У продовженні розробки додамо реальний тайпінг, статуси доставки та історію повідомлень
          через Socket.IO.
        </p>
      </div>
      <div className="flex h-[500px] flex-col rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex-1 space-y-4 overflow-y-auto rounded-md bg-muted/50 p-4">
          <div className="flex justify-start">
            <div className="rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground">
              Привіт! Тут буде історія повідомлень.
            </div>
          </div>
          <div className="flex justify-end">
            <div className="rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
              Очікуємо на Socket.IO backend.
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-md border bg-background p-3 text-sm text-muted-foreground">
          Відправка повідомлень тимчасово вимкнена.
        </div>
      </div>
    </section>
  );
}
