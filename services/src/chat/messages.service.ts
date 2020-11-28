import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}

  async listAll(groupId: number): Promise<Message[]> {
    return this.messageRepository.find({
      relations: ['group', 'sender'],
      where: {
        group: {
          id: groupId,
        },
      },
    });
  }

  async create(
    userId: number,
    groupId: number,
    content: string,
  ): Promise<Message> {
    const msg = this.messageRepository.create({
      group: { id: groupId },
      sender: { id: userId },
      content,
    });
    return await this.messageRepository.save(msg);
  }

  async remove(messageId: number) {
    const entity = await this.messageRepository.findOne(messageId);
    return this.messageRepository.remove(entity);
  }
}
