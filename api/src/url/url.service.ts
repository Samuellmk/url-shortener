import { Injectable } from '@nestjs/common';

@Injectable({})
export class UrlService {
  shorten() {
    return { msg: 'I am alive!' };
  }
}
