import { IsString, IsObject, IsOptional} from 'class-validator';
import { BaseEntity } from 'typeorm';
import { User } from '../../users/entities/user.entity';

export class UpdateReminderDto extends BaseEntity {
    @IsOptional()
    @IsString()
    readonly title:string;

    @IsOptional()
    @IsString()
    readonly description:string;

    @IsOptional()
    @IsObject()
    readonly user: User
}
