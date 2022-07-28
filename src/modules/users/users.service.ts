import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResponseError, ResponseSuccess } from '../../common/dto/response.dto';
import { ConfigService } from '@nestjs/config';
import { IResponse } from '../../common/interfaces/response.interface';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User) repo: Repository<User>,
  ) {
    super(repo);
  }

  async findById(id: string) {
    return await User.findOne(id);
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: { email },
    });
  }
  // Método para atualizar senha do usuario
  async setPassword(email: string, newPassword: string): Promise<boolean> {
    const userFromDb = await this.findByEmail(email);
    if (!userFromDb)
      throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    userFromDb.password = newPassword;

    await userFromDb.save();

    return true;
  }
}
