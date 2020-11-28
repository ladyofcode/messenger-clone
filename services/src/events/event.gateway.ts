<<<<<<< Updated upstream
import { Req } from '@nestjs/common';
=======
import { UseGuards } from '@nestjs/common';
>>>>>>> Stashed changes
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayDisconnect,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { SessionGuard } from 'src/authentication/session.guard';
import { EventService } from './event.service';

@WebSocketGateway(30001, {
  transports: ['websocket'],
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private eventService: EventService) {}

  async handleConnection(@Req() req: any) {
    console.log(req.cookies);
    //this.server.emit('users', 'ok');
  }

  async handleDisconnect() {
    //this.server.emit('users', 'ok')
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  afterInit(server: Server) {
    this.eventService.server = server;
  }

  @SubscribeMessage('authentication')
  authentication(@MessageBody() data: any): WsResponse<any> {
    return { event: 'authentication', data: 'ok' };
  }
}
