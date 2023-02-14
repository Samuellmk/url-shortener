import { Controller, Post } from '@nestjs/common';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private UrlService: UrlService) {}

  @Post('shorten')
  shortenUrl() {
    return this.UrlService.shorten;
  }
}
