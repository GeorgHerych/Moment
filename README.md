# Мить (Moment)

Мить — це Next.js 14 MVP застосунку для знайомств. Проєкт будується ітеративно, починаючи з базової інфраструктури (Ітерація 0) та поступово додаючи функціонал свайпів, матчів, чатів у реальному часі й модерації.

## 🚀 Швидкий старт

1. **Клонування та залежності**
   ```bash
   git clone <repo-url>
   cd Moment
   pnpm install
   # якщо Prisma engines недоступні (офлайн/CI), використайте
   # PRISMA_SKIP_POSTINSTALL_GENERATE=1 pnpm install --ignore-scripts
   ```

2. **Запуск інфраструктури** (Postgres, Redis, MinIO, MailHog)
   ```bash
   docker compose up -d
   ```

3. **Налаштування середовища**
   ```bash
   cp .env.example .env
   # оновіть секрети, SMTP, S3 та інші параметри за потреби
   ```

4. **Міграції та генерація клієнта Prisma**
   ```bash
   pnpm prisma migrate dev --name init
   pnpm prisma db seed
   ```

5. **Запуск застосунку**
   ```bash
   pnpm dev
   ```

6. **Вхід за магічним посиланням**
   - Відкрийте [http://localhost:3000](http://localhost:3000)
   - Перейдіть до «Увійти»
   - Введіть email (наприклад, `alice@example.com`)
   - Перевірте [MailHog UI](http://localhost:8025) для магічного лінку.

## 📦 Стек технологій

- **Фронтенд:** Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod
- **Бекенд:** Next.js server actions та API routes, NextAuth (magic link)
- **База даних:** PostgreSQL + Prisma ORM
- **Інфраструктура:** Docker Compose (Postgres, Redis, MinIO, MailHog)
- **Реал-тайм:** Socket.IO (підготовлено в залежностях)
- **Тести:** Vitest (конфігурація буде додана в наступних ітераціях)

## 🗂️ Структура проєкту

```
src/
  app/
    (marketing)/        # лендинг і публічні сторінки
    (app)/              # основний застосунок після входу
    auth/               # NextAuth вхід
    api/                # API маршрути (NextAuth)
  components/           # UI-компоненти та провайдери
  lib/                  # Утиліти, гео-функції
  server/               # Prisma та NextAuth конфіг
prisma/                 # Схеми та сидер БД
```

## 🗺️ Дорожня карта

- **Ітерація 0:** Ініціалізація (цей коміт) — базовий UI, Prisma, Docker, NextAuth (magic link), seed дані.
- **Ітерація 1:** Онбординг та редагування профілю, завантаження фото, гео-вподобання.
- **Ітерація 2:** Discover/Like/Match логіка, свайп-дек, API для взаємодій.
- **Ітерація 3:** Реал-тайм чат на Socket.IO, статуси delivered/read, typing.
- **Ітерація 4:** Модерація, admin dashboard, Stripe stub для преміум-функцій.
- **Ітерація 5:** Тести, аналітика, rate limiting, підготовка до деплою.

## 🤝 Внесок

Див. [CONTRIBUTING.md](CONTRIBUTING.md) для інструкцій щодо стилю коду, перевірок та процесу PR.

## 🔐 Безпека

У випадку знахідки вразливостей прочитайте [SECURITY.md](SECURITY.md).

## 📄 Ліцензія

Цей проєкт розповсюджується за ліцензією [MIT](LICENSE).
