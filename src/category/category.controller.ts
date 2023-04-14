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
import { CreateCategoryRequestDto } from './dto/create-category.dto';
import { UpdateCategoryRequestDto } from './dto/update-category.dto';
import { QueryParams } from './dto/aboba';
import { GetCategoryByIdOrSlug } from './dto/get-category-by.dto';
import { ApiTags } from '@nestjs/swagger';


export interface GetFilterParams {
  name?: string;
  description?: string;
  active?: boolean | string;
}

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Get() // get all categories
  findByFilter(@Query() query: QueryParams) {
    return this.categoryService.findByFilter(query);
  }

  @Get('/by') // get category by id or slug // <--------------- 
  getCategoryByIdOrSlug(@Query() queryParams: GetCategoryByIdOrSlug) {
    return this.categoryService.findByValue(queryParams);
  }

  @Post() // create category
  create(@Body() dto: CreateCategoryRequestDto) {
    return this.categoryService.create(dto);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryRequestDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
