import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from './db';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { createTransport } from 'nodemailer';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'database'
  },
  pages: {
    signIn: '/auth/signin'
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT ?? 1025),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const transport = createTransport(provider.server as any);
        const result = await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: 'Ваш вхід до Миті',
          text: `Увійдіть за посиланням: ${url}`,
          html: `<p>Увійдіть за посиланням: <a href="${url}">${url}</a></p>`
        });

        const failed = result.rejected.concat(result.pending).filter(Boolean);
        if (failed.length) {
          throw new Error(`Не вдалося надіслати email: ${failed.join(', ')}`);
        }
      }
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    }
  }
};

export const getServerAuthSession = () => getServerSession(authOptions);
