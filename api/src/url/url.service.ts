import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UrlDto } from './dto';
import { randomBytes } from 'crypto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class UrlService {
  constructor(private prisma: PrismaService) {}

  async findShort(dto: string) {
    try {
      const res = await this.prisma.url.findFirstOrThrow({
        where: {
          shortUrl: dto,
        },
      });
      return { url: res.url, statusCode: 301 };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025')
          throw new NotFoundException();
      }
      throw error;
    }
  }

  async shorten(dto: UrlDto) {
    let randomString = '';
    randomString += randomBytes(5)
      .toString('base64')
      .replace(/[/=+]/g, '');

    const link = randomString;

    try {
      const URL = await this.prisma.url.upsert({
        where: {
          url: dto.url,
        },
        update: {},
        create: {
          url: dto.url,
          shortUrl: link,
        },
      });
      return URL;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('URL exists');
        }
      }
      throw error;
    }
  }
}
