import { Injectable } from '@nestjs/common';

import { User } from 'src/entities/user.entity';
import { Contact } from 'src/entities/contact.entity';

@Injectable()
export class ContactsService {
  async listFor(user: User): Promise<Contact[]> {
    return [];
  }

  async create(user: User, otherUser: User): Promise<Contact> {
    return null;
  }

  async remove(user: User, otherUser: User): Promise<Contact> {
    return null;
  }
}
