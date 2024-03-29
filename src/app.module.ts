import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './services/users.module';
import { User, UserSchema } from './schemas/users.schema';
import { UsersService } from './services/users.service';
import { Exceptions } from './exceptions/exceptions';
import { globalConstants } from './constant';
import { UserMiddleware } from './middleware/user.middleware';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(globalConstants.DB_URL),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService, Exceptions],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes(globalConstants.USERS);
  }
}
