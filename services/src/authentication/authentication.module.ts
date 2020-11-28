import { AuthenticationController } from './authentication.controller';
import { Module, Global } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthenticationService } from './authentication.service';
import { LocalStrategy } from './local.strategy';
import { SessionGuard } from './session.guard';

@Global()
@Module({
  imports: [UserModule],
  controllers: [AuthenticationController],
  providers: [LocalStrategy, AuthenticationService, SessionGuard],
  exports: [SessionGuard],
})
export class AuthenticationModule {}
