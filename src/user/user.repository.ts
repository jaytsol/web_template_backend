import { Model, ObjectId } from 'mongoose';
import { UserDAO } from './dao/user.dao';
import { USER_MODEL } from 'src/providers/constants';
import { Inject } from '@nestjs/common';

export class UserRepository {
  constructor(
    @Inject(USER_MODEL)
    private readonly userModel: Model<UserDAO>,
  ) {}

  async findById(id: ObjectId): Promise<UserDAO | null> {
    return this.userModel.findById(id).exec();
  }

  async findByUserName(username: string): Promise<UserDAO | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findAll(): Promise<UserDAO[]> {
    return this.userModel.find().exec();
  }

  async create(user: UserDAO): Promise<UserDAO> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async update(id: string, user: UserDAO): Promise<UserDAO | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
