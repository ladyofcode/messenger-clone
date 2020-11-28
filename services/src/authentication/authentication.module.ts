import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [LocalStrategy, AuthenticationService, UserService],
})
export class AuthenticationModule {}
