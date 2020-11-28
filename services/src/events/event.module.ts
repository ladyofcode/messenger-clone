import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
import { EventService } from './event.service';

@Module({
  imports: [],
  controllers: [],
  providers: [EventService, EventGateway],
  exports: [EventService],
})
export class EventModule {}
