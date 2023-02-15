import { Test } from '@nestjs/testing';
import { UrlService } from './url.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  ConfigModule,
  ConfigService,
} from '@nestjs/config';

describe('UrlController', () => {
  let urlService: UrlService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ConfigService, UrlService, PrismaService],
      imports: [ConfigModule.forRoot({ isGlobal: true })],
    }).compile();

    urlService = moduleRef.get<UrlService>(UrlService);
    prisma = moduleRef.get<PrismaService>(PrismaService);
  });

  describe('findShort', () => {
    it('should return an object of url and statusCode', async () => {
      // Arrange
      const dto = 'https://www.google.com';
      const result = { url: 'aBcD12', statusCode: 301 };
      prisma.url.findFirstOrThrow = jest
        .fn()
        .mockReturnValueOnce(result);

      // Act, Assert
      expect(await urlService.findShort(dto)).toEqual(
        result
      );
    });
  });
});
