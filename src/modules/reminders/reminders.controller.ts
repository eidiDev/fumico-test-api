import { Controller, Get, Post, Body, Patch, Param, Delete , UseGuards} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { Reminder } from './entities/reminder.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard'

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
      user: {
        eager: true,
        exclude: ['password', 'tempPassword', 'token', 'token_created_at']
      }
    }
  },
  dto: { create: CreateReminderDto, update: UpdateReminderDto },
})
@Controller('reminders')
@UseGuards(JwtAuthGuard)
export class RemindersController implements CrudController<Reminder>  {
  constructor(public service: RemindersService) {}

}
