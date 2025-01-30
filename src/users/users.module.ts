import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from 'src/providers/users/user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from './user.repository';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...userProviders, UserRepository],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
