import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UrlDto } from './dto';
import { randomBytes } from 'crypto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UrlService {
  constructor(private prisma: PrismaService) {}
  async shorten(dto: UrlDto) {
    let randomString = '';
    randomString += randomBytes(5).toString('base64').replace(/[/=+]/g, '');

    const link = process.env.BASE_URL + randomString;

    try {
      const URL = await this.prisma.url.create({
        data: {
          url: dto.url,
          shortUrl: link,
        },
      });
      return URL;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('URL exists');
        }
      }
      throw error;
    }
  }
}
