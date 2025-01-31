import { Controller, Get, Request, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ObjectId, Types } from 'mongoose';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  findMe(@Request() req) {
    return this.userService.findByUserName(req.user.username);
  }

  @Get('all')
  findAll() {
    return this.userService.findAll();
  }

  @Get()
  @ApiQuery({
    name: 'id',
    required: true,
    type: 'string',
    example: `${new Types.ObjectId()}`,
  })
  findOne(@Query('id') id: ObjectId) {
    return this.userService.findOne(id);
  }
}
