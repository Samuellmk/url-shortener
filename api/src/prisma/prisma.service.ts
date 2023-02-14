import { Injectable } from '@nestjs/common';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
      super({
        datasources: {
          db: {
            url: "postgresql://postgres:123@localhost:5434/nest?schema=public"
          }
        }
      })
    }
  }
