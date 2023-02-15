import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { Query, Redirect } from '@nestjs/common/decorators';
import { UrlDto } from './dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(private UrlService: UrlService) {}

  @Get('fullUrl')
  @Redirect()
  getUrl(@Query('shortenUrl') shortenUrl: string) {
    // if(this.UrlService.findShort(id)) {
    //   return { url: this.configService.get('BASE_URL')}
    // }
    return this.UrlService.findShort(shortenUrl);
  }

  @Post('shorten')
  shortenUrl(@Body() dto: UrlDto) {
    return this.UrlService.shorten(dto);
  }
}
