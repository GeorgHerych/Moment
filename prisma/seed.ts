import { PrismaClient } from '@prisma/client';
import { subYears } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany();
  await prisma.match.deleteMany();
  await prisma.like.deleteMany();
  await prisma.block.deleteMany();
  await prisma.report.deleteMany();
  await prisma.photo.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  const users = await Promise.all(
    [
      {
        email: 'alice@example.com',
        displayName: 'Аліса',
        gender: 'female',
        orientation: 'hetero',
        lat: 50.4501,
        lng: 30.5234,
        city: 'Київ'
      },
      {
        email: 'bob@example.com',
        displayName: 'Богдан',
        gender: 'male',
        orientation: 'hetero',
        lat: 49.8397,
        lng: 24.0297,
        city: 'Львів'
      },
      {
        email: 'olena@example.com',
        displayName: 'Олена',
        gender: 'female',
        orientation: 'bisexual',
        lat: 46.4825,
        lng: 30.7233,
        city: 'Одеса'
      }
    ].map(async (user, index) => {
      const createdUser = await prisma.user.create({
        data: {
          email: user.email,
          profile: {
            create: {
              displayName: user.displayName,
              birthDate: subYears(new Date(), 25 + index * 3),
              gender: user.gender,
              orientation: user.orientation,
              bio: 'Це демонстраційний профіль для MVP Миті.',
              interests: ['музика', 'подорожі', 'спорт'].slice(0, 2 + (index % 2)),
              city: user.city,
              lat: user.lat,
              lng: user.lng,
              distanceKm: 50,
              minAge: 23,
              maxAge: 35,
              photos: {
                create: [
                  {
                    url: `https://images.unsplash.com/photo-15${index + 1}0000000`,
                    order: 0
                  }
                ]
              }
            }
          }
        }
      });

      return createdUser;
    })
  );

  await prisma.like.create({
    data: {
      fromUserId: users[0].id,
      toUserId: users[1].id
    }
  });

  await prisma.like.create({
    data: {
      fromUserId: users[1].id,
      toUserId: users[0].id
    }
  });

  await prisma.match.create({
    data: {
      userAId: users[0].id,
      userBId: users[1].id,
      messages: {
        create: [
          {
            senderId: users[0].id,
            content: 'Привіт! Рада знайомству :)'
          },
          {
            senderId: users[1].id,
            content: 'Привіт! Як проходить твій день?'
          }
        ]
      }
    }
  });

  console.info('✅ Seed завершено. Створено користувачів:', users.length);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
