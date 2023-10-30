import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(email: string, password: string) {
    const user = this.usersRepository.create({ email, password });
    return this.usersRepository.save(user);
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  find(email: string) {
    return this.usersRepository.find({ where: { email } });
  }

  update() {}

  remove() {}
}
