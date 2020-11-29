import { AuthenticationController } from './authentication.controller';
import { Module, Global } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { SessionGuard } from './session.guard';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { EventModule } from 'src/events/event.module';

@Global()
@Module({
  imports: [EventModule, UserModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthenticationController],
  providers: [LocalStrategy, AuthenticationService, SessionGuard, UserService],
  exports: [SessionGuard],
})
export class AuthenticationModule {}
