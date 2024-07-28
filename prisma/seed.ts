import { parseArgs } from 'node:util';
import { seed as devSeed } from './dev-seed';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const options = {
  environment: { type: 'string' },
} as const;

async function baseSeed() {
  console.log('Creating notification types...');
  const platformUpdate = await prisma.notificationType.upsert({
    where: { typeIdentifier: 'PlatformUpdate' },
    update: {},
    create: {
      typeIdentifier: 'PlatformUpdate',
      messageTemplate: 'New features - see what’s new',
      actionType: 'Alert',
      actionTemplate: '{version}'
    },
  });

  const commentTag = await prisma.notificationType.upsert({
    where: { typeIdentifier: 'CommentTag' },
    update: {},
    create: {
      typeIdentifier: 'CommentTag',
      messageTemplate: '{senderName} tagged you in a comment',
      actionType: 'OpenUrl',
      actionTemplate: '/comments'
    },
  });

  const accessGranted = await prisma.notificationType.upsert({
    where: { typeIdentifier: 'AccessGranted' },
    update: {},
    create: {
      typeIdentifier: 'AccessGranted',
      messageTemplate: '{senderName} shared a chat with you',
      actionType: 'OpenUrl',
      actionTemplate: '/chats'
    },
  });

  const joinWorkspace = await prisma.notificationType.upsert({
    where: { typeIdentifier: 'JoinWorkspace' },
    update: {},
    create: {
      typeIdentifier: 'JoinWorkspace',
      messageTemplate: '{senderName} joined your workspace',
      actionType: 'OpenUrl',
      actionTemplate: '/workspace'
    },
  });

  console.log([platformUpdate, commentTag, accessGranted, joinWorkspace]);
}

async function main() {
  const {
    values: { environment },
  } = parseArgs({ options: options });

  baseSeed();

  switch (environment) {
    case 'dev':
      devSeed();
      break;
  }
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