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
import { EventService } from './event.service';

@WebSocketGateway(Number(process.env.WEBSOCKET_PORT), {
  transports: ['websocket'],
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private eventService: EventService) {}

  async handleConnection() {
    //this.server.emit('users', 'ok');
  }

  async handleDisconnect() {
    //this.server.emit('users', 'ok')
  }

  afterInit(server: Server) {
    this.eventService.server = server;
  }

  @SubscribeMessage('authentication')
  authentication(@MessageBody() data: any): WsResponse<any> {
    return { event: 'authentication', data: 'ok' };
  }
}
