'use client';

import { useState, useTransition } from 'react';
import { signIn } from 'next-auth/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
  email: z.string().email('Введіть коректну електронну адресу')
});

type FormValues = z.infer<typeof formSchema>;

export default function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      setMessage(null);
      const result = await signIn('email', {
        email: values.email,
        callbackUrl: '/discover',
        redirect: false
      });

      if (result?.error) {
        setMessage('Не вдалося надіслати лист. Перевірте налаштування SMTP.');
      } else {
        setMessage('Ми надіслали посилання для входу. Перевірте пошту.');
      }
    });
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="email">Електронна пошта</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Надсилаємо…' : 'Надіслати магічне посилання'}
      </Button>
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
    </form>
  );
}
