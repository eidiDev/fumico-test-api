import { IsString, IsObject, IsOptional} from 'class-validator';
import { BaseEntity } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export class CreateReminderDto extends BaseEntity {
    
    @IsString()
    readonly title:string;

    @IsString()
    readonly description:string;

    // @IsObject()
    // readonly owner: User
}
