import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway implements OnGatewayInit {
  @WebSocketServer()
  private readonly ws: Server;

  private readonly logger = new Logger('ChatGateway');

  afterInit(server: Server) {
    this.logger.log('WebSockets inited!');
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    return payload;
  }
}
