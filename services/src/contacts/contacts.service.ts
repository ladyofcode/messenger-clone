import { Injectable } from '@nestjs/common';

import { User } from 'src/entities/user.entity';
import { Contact } from 'src/entities/contact.entity';

@Injectable()
export class ContactsService {
  async listFor(userId: number): Promise<Contact[]> {
    return [];
  }

  async create(userId: number, otherUserId: number): Promise<Contact> {
    return null;
  }

  async remove(userId: number, otherUserId: number): Promise<Contact> {
    return null;
  }
}
