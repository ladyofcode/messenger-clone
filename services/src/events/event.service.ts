import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class EventService {
  public server: Server = null;
}
