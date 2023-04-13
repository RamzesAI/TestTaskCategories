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
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.create(dto);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('get-by-value')
  findByValue(@Query() value: GetValueParams) {
    return this.categoryService.findByValue(value);
  }

  @Get('get-by-filter')
  findByFilter(
    @Query('name') name: string,
    @Query('description') description: string,
    @Query('active') active: string,
    @Query('search') search: string,
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
    @Query('sort') sort: string,
  ) {
    return this.categoryService.findByFilter();
  }

  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
