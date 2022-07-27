import { IsNotEmpty, IsEmail, IsBoolean, IsString} from 'class-validator';
import { BaseEntity } from 'typeorm';

export class CreateUserDto extends BaseEntity {
  @IsString()
  readonly name:string;
  
  @IsBoolean()
  readonly is_active?: boolean;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
