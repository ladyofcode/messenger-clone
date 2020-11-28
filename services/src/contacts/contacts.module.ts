import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ContactsController } from '../contacts/contacts.controller';
import { ContactsService } from './contacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, User])],
  controllers: [ContactsController],
  providers: [ContactsService, UserService],
})
export class ContactsModule {}
