import { Injectable } from '@nestjs/common';
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notificationsRepository';
import { NotificationNotFound } from './errors/notificationNotFoundError';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
