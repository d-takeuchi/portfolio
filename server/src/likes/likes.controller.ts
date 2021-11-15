import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { FavoriteDto } from './dto/favorite.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  public toggleLike(@Body(ValidationPipe) favoriteData: FavoriteDto) {
    return this.likesService.toggleLike(favoriteData);
  }
}
