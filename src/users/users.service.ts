import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { Users, UserSchema } from './schemas/user.schema';
@Injectable()
export class UsersService {
constructor(@InjectModel('Users') private readonly userModel: Model<Users>) {}
  create(CreateUserInput : CreateUserInput ) {
    return new this.userModel({
       ...CreateUserInput ,
       createdAt: new Date(),
      updatedAt: new Date(),
    }).save();
  }

  async findAll(): Promise<Users[]> {
    return await this.userModel.find();
  }

	async findOne(id: string): Promise<Users> {
    return await this.userModel.findById(id).exec();  
   }

  async update(id: number, updateUserInput : UpdateUserInput ) {
    await this.userModel.update({ _id: id }, UpdateUserInput );
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
  }
}
