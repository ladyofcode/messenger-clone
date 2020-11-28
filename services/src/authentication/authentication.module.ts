// import { AuthenticationController } from './authentication.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { SessionGuard } from './session.guard';

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [LocalStrategy, AuthenticationService, SessionGuard],
})
export class AuthenticationModule {}
