import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import {
    IsDefined,
    IsEnum,
    IsObject,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

import { DefaultFieldsEntity } from '../../entities/defaultFieldsEntity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Reminder extends  DefaultFieldsEntity{

    @Column({ nullable: true, default: '' })
    title: string;

    @Column({ nullable: true, default: '' })
    description: string;

    @ManyToOne(() => User, (user) => user.reminders, {onDelete: "CASCADE"})
    @IsObject()
    owner: User;
}
