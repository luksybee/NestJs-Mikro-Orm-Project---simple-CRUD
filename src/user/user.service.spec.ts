import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User, UserRepositoryFake } from './entities/user.entity';
import { getRepositoryToken } from '@mikro-orm/nestjs';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: UserRepositoryFake,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
