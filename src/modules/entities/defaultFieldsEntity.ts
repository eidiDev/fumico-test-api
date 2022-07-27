import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsBoolean } from 'class-validator';

export abstract class DefaultFieldsEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // @Column()
  // @Generated('uuid')
  // uuid: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
