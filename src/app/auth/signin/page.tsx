import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/server/auth';
import SignInForm from './signin-form';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/discover');
  }

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center py-16">
      <div className="mx-auto w-full max-w-md rounded-lg border bg-card p-8 shadow">
        <h1 className="text-2xl font-semibold">Вхід до Миті</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Введіть свою електронну пошту — ми надішлемо посилання для входу.
        </p>
        <SignInForm />
      </div>
    </div>
  );
}
