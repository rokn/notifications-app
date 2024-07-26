-- CreateEnum
CREATE TYPE "NotificationTypeIdentifier" AS ENUM ('PlatformUpdate', 'CommentTag', 'AccessGranted', 'JoinWorkspace');

-- CreateEnum
CREATE TYPE "NotificationActionType" AS ENUM ('OpenUrl', 'Alert');

-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "NotificationType" (
    "typeIdentifier" "NotificationTypeIdentifier" NOT NULL,
    "messageTemplate" TEXT NOT NULL,
    "actionType" "NotificationActionType" NOT NULL,
    "actionTemplate" TEXT,

    CONSTRAINT "NotificationType_pkey" PRIMARY KEY ("typeIdentifier")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "additionalData" JSONB,
    "typeIdentifier" "NotificationTypeIdentifier" NOT NULL,
    "senderName" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_typeIdentifier_fkey" FOREIGN KEY ("typeIdentifier") REFERENCES "NotificationType"("typeIdentifier") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_senderName_fkey" FOREIGN KEY ("senderName") REFERENCES "User"("name") ON DELETE SET NULL ON UPDATE CASCADE;
