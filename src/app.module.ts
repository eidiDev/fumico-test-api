import { Module, UseGuards } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { defaultConfig } from './orm.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { RemindersModule } from './modules/reminders/reminders.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(defaultConfig),
    UsersModule,
    AuthModule,
    RemindersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
