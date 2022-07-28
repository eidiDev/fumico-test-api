import { IsNotEmpty, IsEmail, IsBoolean, IsString, IsOptional} from 'class-validator';

export class CreateUserDto  {
  
  @IsString()
  readonly name:string;

  @IsOptional()
  @IsBoolean()
  readonly is_active?: boolean;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
