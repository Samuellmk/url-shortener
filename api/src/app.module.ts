import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UrlModule, PrismaModule],
})
export class AppModule {}
