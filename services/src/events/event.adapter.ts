import { IoAdapter } from '@nestjs/platform-socket.io';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

export class EventAdapter extends IoAdapter {
  createIOServer(port: number, options?: any): any {
    const server = super.createIOServer(port, options);

    // const myCookieParser = cookieParser();

    // const mySession = session({
    //   secret: process.env.SECRET,
    //   resave: false,
    //   saveUninitialized: false,
    // });

    // server.use((socket, next) => {
    //   myCookieParser(socket.request, socket.request.res || {}, next);
    // });
    // server.use((socket, next) => {
    //   mySession(socket.request, socket.request.res || {}, next);
    // });
    return server;
  }
}
