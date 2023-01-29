import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.input';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => CreateUserDto )
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserDto )
  createUser(@Args('CreateUserInput') CreateUserInput  : CreateUserInput  ) {
    return this.usersService.create(CreateUserInput );
  }

  @Query(() => [CreateUserDto ], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => CreateUserDto)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => CreateUserDto )
  updateUser(@Args('UpdateUserInput') UpdateUserInput : UpdateUserInput ) {
    return this.usersService.update(UpdateUserInput.id, UpdateUserInput );
  }

  @Mutation(() => CreateUserDto )
  removeUser(@Args('id', { type: () => String }) id: string) {
    return this.usersService.remove(id);
  }
}
