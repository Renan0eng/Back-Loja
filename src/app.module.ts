import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UsersModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
