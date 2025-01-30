import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ example: 'johndoe / johndoe@email.com' })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ example: 's3cr3t' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
