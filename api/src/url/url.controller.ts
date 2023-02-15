import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { UrlDto } from './dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
  constructor(private UrlService: UrlService) {}

  @Get(':id')
  getUrl(@Param('id') id: string) {
    return this.UrlService.findShort(id);
  }

  @Post('shorten')
  shortenUrl(@Body() dto: UrlDto) {
    return this.UrlService.shorten(dto);
  }
}
