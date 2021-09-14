import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect([
        {
          id: 1,
          name: 'luke',
          email: 'string',
          password: 'secret001',
          profile_image: 'google.com',
          createdAt: '1630764477221',
          updatedAt: '1630966898610',
        },
        {
          id: 2,
          name: 'lukman',
          email: 'luk@me.com',
          password: 'secret',
          profile_image: 'google.com',
          createdAt: '1630818864512',
          updatedAt: '1630965642344',
        },
      ]);
  });
});
