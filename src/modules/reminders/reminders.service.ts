import { Injectable } from '@nestjs/common';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Reminder } from './entities/reminder.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RemindersService extends TypeOrmCrudService<Reminder>{
  constructor(@InjectRepository(Reminder) repo: Repository<Reminder>) {
    super(repo);
  }
}
