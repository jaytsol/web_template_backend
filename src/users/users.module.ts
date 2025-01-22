import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from 'src/providers/users/user.providers';

@Module({
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
