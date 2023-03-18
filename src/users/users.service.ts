import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [];

  create(createUserInput: CreateUserInput) {
    const newUser = new User();
    newUser.uid = this.users.length + 1;
    newUser.name = createUserInput.name;
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    for (let index = 0; index < this.users.length; index++) {
      const targetUser = this.users[index];
      if (targetUser.uid == id) {
        return targetUser;
      }
    }

    return null;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
