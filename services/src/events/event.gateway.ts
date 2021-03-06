import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayDisconnect,
  OnGatewayConnection,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EventService } from './event.service';

@WebSocketGateway(30001, {
  transports: ['websocket'],
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private eventService: EventService) {}

  async handleConnection() {
    //
    console.log('ian connected');
  }

  async handleDisconnect(@ConnectedSocket() socket: Socket) {
    this.eventService.removeSocketId(socket.id);
  }

  @SubscribeMessage('authenticate')
  async authenticateSocket(
    @MessageBody() { token }: { token: string },
    @ConnectedSocket() socket: Socket,
  ) {
    const user = await this.eventService.authenticateSocket(token, socket.id);
    if (user == null) {
      return { status: 'failed' };
    }
    return { status: 'success' };
  }

  afterInit(server: Server) {
    this.eventService.server = server;
  }
}
