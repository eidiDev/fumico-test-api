import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'typeorm';

export class CreateUserDto extends BaseEntity {
  // @IsEmail()
  // @UniqueOnDatabase(User)
  // email: string;
  // @IsString()
  // first_name: string;
  //
  // @IsString()
  // @IsOptional()
  // last_name: string;
  //
  @IsNotEmpty()
  password: string;
  //
  // @IsObject()
  // @ValidateNested()
  // @Type(() => CreateProfileDto)
  // profile: CreateProfileDto;
  // //
  // @IsArray()
  // @IsOptional()
  // @ValidateNested({ each: true })
  // @Type(() => CreateAddressUserDto)
  // addresses: CreateAddressUserDto[];
}
