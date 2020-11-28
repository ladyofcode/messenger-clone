import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { User } from 'src/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { EventGateway } from './event.gateway';
import { EventService } from './event.service';

@Module({
  imports: [AuthenticationModule],
  controllers: [],
  providers: [EventGateway, EventService],
})
export class EventModule {}
