import { Exclude, Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';
import { TransformWith } from 'src/common/decorators';

export class UserEntity {
  @TransformWith(String)
  @Expose({ name: 'id' })
  _id: ObjectId;

  @Expose() username: string;
  @Expose() email: string;

  @Exclude() __v: unknown;
  @Exclude() v: unknown;
  @Exclude() password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
