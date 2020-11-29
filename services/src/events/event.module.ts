import { EventController } from './event.controller';
import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
import { EventService } from './event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayKey } from 'src/entities/gatewaykey.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GatewayKey, User])],
  controllers: [EventController],
  providers: [EventService, EventGateway, UserService],
  exports: [EventService],
})
export class EventModule {}
