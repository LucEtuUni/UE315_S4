import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { Users, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])

  ],
  providers: [
    UsersService,
	UsersResolver,
  
  ]
})
export class UsersModule {}