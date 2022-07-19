import {
  AfterLoad,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { IsArray, IsObject, IsOptional, ValidateNested } from 'class-validator';
import { UniqueOnDatabase } from '../../../common/validations/uniqueValidation';
import { Reminder } from '../../reminders/entities/reminder.entity';

import { Type } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @PrimaryGeneratedColumn('uuid')
  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: true })
  first_name: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ nullable: true })
  cpf_cnpj: string;

  @Column({ nullable: true })
  last_name: string;


  @Column({ unique: true })
  //@IsEmail()
  @UniqueOnDatabase(User)
  email: string;

  @Column()
  password: string;


  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @Column({ default: '' })
  token: string;

  @Column({ default: null })
  token_created_at: Date;

  @OneToMany(() => Reminder, (user) => user.user, {cascade:true})
  reminders: Reminder[];



  // Adicionado o tempPassword para só atualizar caso ele seja diferente, evitando
  // hash desnecessario
  private tempPassword: string;
  @AfterLoad()
  private loadTempPassword(): void {
    this.tempPassword = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.tempPassword !== this.password) {
      this.password = await bcrypt.hash(this.password, 8);
    }
  }


  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
