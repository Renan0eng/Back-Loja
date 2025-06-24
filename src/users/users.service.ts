import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto): User {
    const id = String(this.users.length + 1);
    const user: User = { id, ...createUserDto };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((e) => e.id == id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.users = this.users.filter((e) => e.id !== id)

    const user: User = { id, ...updateUserDto };
    this.users.push(user);
    
    return user;
  }

  remove(id: string) {
    this.users = this.users.filter((e) => e.id !== id)
    return this.users;
  }
}
