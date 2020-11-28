import { User } from '@models';
import { Injectable } from '@nestjs/common';
import { Message } from 'src/models/message.model';

@Injectable()
export class MessagesService {
  async listAll(user: User): Promise<Message[]> {
    return [];
  }

  async create(user: User, groupId: number, message: string): Promise<Message> {
    return null;
  }

  async remove(messageId: number) {
    return null;
  }
}
