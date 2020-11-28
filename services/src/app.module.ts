import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './chat/chat.module';

@Module({
  imports: [UserModule, AuthenticationModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
