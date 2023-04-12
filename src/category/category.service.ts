import { Category } from './entities/category.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}
  create(dto: CreateCategoryDto) {
    return this.repository.save(dto);
  }

  async findById(id: string) {
    const category = await this.repository.findOneBy({ id });
    if (!category) {
      throw new HttpException(
        'такой категории не существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    return category;
  }

  async findBySlug(slug: string) {
    const category = await this.repository.findOneBy({ slug });
    if (!category) {
      throw new HttpException(
        'такой категории не существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.repository.findOneBy({ id });
    if (!category) {
      throw new HttpException(
        'такой категории не существует',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.repository.update(id, updateCategoryDto);
    return this.repository.findOneBy({ id });
  }

  async remove(id: string) {
    const category = await this.repository.findBy({ id });
    if (!category.length) {
      throw new HttpException('категория не найдена', HttpStatus.BAD_REQUEST);
    }
    await this.repository.delete(id);
    return 'категория удалена';
  }

  findAll() {
    return this.repository.find();
  }
}
