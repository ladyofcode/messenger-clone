import { Injectable } from '@nestjs/common';
//@note: I get user model from @models by setting the path in the tsconfig.json "path" property.
import { User } from '@models';
import { Contact } from 'src/models/contact.model';

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
