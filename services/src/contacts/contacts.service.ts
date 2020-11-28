import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Contact } from 'src/entities/contact.entity';
import { getConnection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactsService {
  constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>) {}

  async listFor(userId: number): Promise<User[]> {
    const contacts = await getConnection()
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoin(
        (q) => q.from(Contact, 'contacts'),
        'contact',
        'user.id = contact."user1Id" and contact."user2Id" = :userId or user.id = contact."user2Id" and contact."user1Id" = :userId',
        { userId },
      )
      .getMany();

    return contacts;
  }

  async create(userId: number, otherUserId: number): Promise<Contact> {
    return this.contactRepository.create({
      user1: { id: userId },
      user2: { id: otherUserId },
    });
  }

  async remove(userId: number, otherUserId: number): Promise<Contact> {
    const contact = await this.contactRepository.findOne({
      where: [
        { user1: { id: userId }, user2: { id: otherUserId } },
        { user1: { id: otherUserId }, user2: { id: userId } },
      ],
    });
    this.contactRepository.remove(contact);
    return contact;
  }
}
