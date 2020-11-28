import { EventModule } from './events/event.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesModule } from './chat/chat.module';
import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';
import { Contact } from './entities/contact.entity';
import { Group } from './entities/group.entity';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    EventModule,
    AuthenticationModule,
    UserModule,
    MessagesModule,
    ContactsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [User, Message, Contact, Group],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
