import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { UpdateCategoryRequestDto } from './dto/update-category.dto';
import { QueryParams } from './dto/aboba';
import { GetCategoryByIdOrSlug } from './dto/get-category-by.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';

export interface GetFilterParams {
  name?: string;
  description?: string;
  active?: boolean | string;
}

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Get categories by filter' })
  @Get() // get all categories
  findByFilter(@Query() query: QueryParams) {
    return this.categoryService.findByFilter(query);
  }

  @ApiOperation({ summary: 'Get category by id or slug' })
  @Get('/by')
  getCategoryByIdOrSlug(@Query() queryParams: GetCategoryByIdOrSlug) {
    return this.categoryService.getCategoryByIdOrSlug(queryParams);
  }

  @ApiResponse({ type: Category })
  @ApiOperation({ summary: 'Create new category' })
  @Post() // create category
  createCategory(@Body() createCategoryDto: Category) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Update category by id' })
  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryRequestDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete category by id' })
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
