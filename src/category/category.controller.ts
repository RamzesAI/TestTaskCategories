import { ValidationPipe } from './../pipes/validation.pipe';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { QueryParams } from './dto/aboba';

export interface GetValueParams {
  id?: string;
  slug?: string;
}

export interface GetFilterParams {
  name?: string;
  description?: string;
  active?: boolean | string;
}

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @UsePipes(ValidationPipe)
  @Post() // create category
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get('/all') // get all categories
  findByFilter(@Query() query: QueryParams) {
    return this.categoryService.findByFilter(query);
  }

  @Get() // get category by id or slug
  findByValue(@Query() value: GetValueParams) {
    return this.categoryService.findByValue(value);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
