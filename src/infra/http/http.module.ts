import { Module } from '@nestjs/common';
import { SendNotification } from '@app/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@app/useCases/cancelNotification';
import { CountRecipientNotification } from '@app/useCases/countRecipientNotifications';
import { GetRecipientNotification } from '@app/useCases/getRecipientNotifications';
import { ReadNotification } from '@app/useCases/readNotification';
import { UnreadNotification } from '@app/useCases/unreadNotifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotification,
    GetRecipientNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
