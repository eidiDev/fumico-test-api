import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UniqueOnDatabase } from '../../../common/validations/uniqueValidation';
import { User } from '../entities/user.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @IsEmail()
  @UniqueOnDatabase(User)
  email: string;
}
