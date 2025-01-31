import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ example: 'johndoe' })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ example: 's3cr3t' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class SignUpDTO {
  @ApiProperty({ example: 'johndoe' })
  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @ApiProperty({ example: 's3cr3t' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @ApiProperty({ example: 'johndoe@email.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;
}
