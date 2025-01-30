import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userProviders } from 'src/providers/user/user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders, UserRepository],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
