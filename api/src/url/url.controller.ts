import { Body, Controller, Post } from '@nestjs/common';
import { UrlDto } from './dto';
import { UrlService } from './url.service';

@Controller('url')
export class UrlController {
  constructor(private UrlService: UrlService) {}

  @Post('shorten')
  shortenUrl(@Body() dto: UrlDto) {
    return this.UrlService.shorten(dto);
  }
}
