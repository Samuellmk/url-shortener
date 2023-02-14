import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({}), UrlModule, PrismaModule],
})
export class AppModule {}
