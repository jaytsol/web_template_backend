import {
  Controller,
  Get,
  Request,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ObjectId, Types } from 'mongoose';
import { UserEntity } from './entity/user.entity';
import { ClassSerializerInterceptor } from '@nestjs/common';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async findMe(@Request() req) {
    const user = await this.userService.findByUserName(req.user.username);
    return new UserEntity(user);
  }

  @Get('all')
  async findAll() {
    const users = await this.userService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @Get()
  @ApiQuery({
    name: 'id',
    required: true,
    type: 'string',
    example: `${new Types.ObjectId()}`,
  })
  async findOne(@Query('id') id: ObjectId) {
    const user = await this.userService.findOne(id);
    return new UserEntity(user);
  }
}
