import { wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const email = createUserDto.email;
    const alreadyCreated = await this.userRepository.findOne({ email });
    if (!alreadyCreated) {
      const user = new User(
        createUserDto.name,
        createUserDto.email,
        createUserDto.password,
        createUserDto.profile_image,
      );
      await this.userRepository.persistAndFlush(user);

      return user;
    }
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOneOrFail(id);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    wrap(user).assign(updateUserDto);

    await this.userRepository.flush();
  }

  async remove(id: number) {
    return this.userRepository.nativeDelete(id);
  }
}
