import { UserService } from './user.service';
import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserController } from './user.controller';
import { EventModule } from 'src/events/event.module';
import { ContactsModule } from 'src/contacts/contacts.module';

@Global()
@Module({
  imports: [EventModule, ContactsModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
