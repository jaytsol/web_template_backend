import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { UserDAO } from './dao/user.dao';
import { USER_MODEL } from 'src/providers/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL)
    private userModel: Model<UserDAO>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserDAO> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<UserDAO[]> {
    return this.userModel.find().exec();
  }

  async findOne(username: string): Promise<UserDAO | null> {
    return this.userModel.findOne({ username }).exec();
  }
}
