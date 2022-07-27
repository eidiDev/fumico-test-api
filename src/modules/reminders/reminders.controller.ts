import { Controller, Get, Post, Body, Patch, Param, Delete , UseGuards} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder } from './entities/reminder.entity';
import { Crud, CrudController, CrudAuth } from '@nestjsx/crud';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard'
import {User} from '../users/entities/user.entity'

@Crud({
  model: {
    type: Reminder,
  },
  params: {
    id: {
      type: 'uuid',
      primary: true,
      field: 'id',
    },
  },
  query: {
    alwaysPaginate: true,
    join: {
      owner: {
        eager: true,
        exclude: ['password']
      }
    }
  },
  dto: { create: CreateReminderDto, update: UpdateReminderDto },
})
@CrudAuth({
  property: 'user',
  filter: ( user ) => {
    return { 'owner.id' : user.userId}
  },
  persist: (user) => {
    return {'owner' : user.userId }
  }
})

@Controller('reminders')
@UseGuards(JwtAuthGuard)
export class RemindersController implements CrudController<Reminder>  {
  constructor(public service: RemindersService) {}

}
