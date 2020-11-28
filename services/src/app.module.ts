import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthenticationModule,
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [],
      synchronize: true,
    }),
  ],
=======
import { MessagesModule } from './chat/chat.module';

@Module({
  imports: [UserModule, AuthenticationModule, MessagesModule],
>>>>>>> 6b1dfbfb330586c1eac805a46dcbc053ccefb7d2
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
