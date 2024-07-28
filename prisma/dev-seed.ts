import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seed() {
  console.log('Creating users...');
  const stuart = await prisma.user.upsert({
    where: { name: 'Stuart Russel' },
    update: {},
    create: {
      name: 'Stuart Russel',
      avatarUrl: 'https://api.multiavatar.com/Stuart%20Russel.png',
    },
  });
  const alan = await prisma.user.upsert({
    where: { name: 'Alan Turing' },
    update: {},
    create: {
      name: 'Alan Turing',
      avatarUrl: 'https://api.multiavatar.com/AlanTuring.png',
    },
  });
  console.log([stuart, alan]);

  console.log('Creating notifications...');
  const platformUpdate = await prisma.notification.upsert({
    where: { id: 1 },
    update: {},
    create: {
      typeIdentifier: 'PlatformUpdate',
      additionalData: { version: '3.7.0' },
    },
  });

  const commentTag = await prisma.notification.upsert({
    where: { id: 2 },
    update: {},
    create: {
      typeIdentifier: 'CommentTag',
      senderName: 'Stuart Russel',
    },
  });

  const accessGranted = await prisma.notification.upsert({
    where: { id: 3 },
    update: {},
    create: {
      typeIdentifier: 'AccessGranted',
      senderName: 'Stuart Russel',
    },
  });

  const joinWorkspace = await prisma.notification.upsert({
    where: { id: 4 },
    update: {},
    create: {
      typeIdentifier: 'JoinWorkspace',
      senderName: 'Alan Turing',
    },
  });

  console.log([platformUpdate, commentTag, accessGranted, joinWorkspace]);
}