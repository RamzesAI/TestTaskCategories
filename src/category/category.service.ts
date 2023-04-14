import { Category } from './entities/category.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GetValueParams } from './category.controller';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repository: Repository<Category>,
  ) {}
  create(dto: CreateCategoryDto) {
    return this.repository.save(dto);
  }

  async findByValue(value: GetValueParams) {
    if (value.id) {
      const category = await this.repository.findOneBy(value);
      if (!category) {
        throw new HttpException(
          'такой категории не существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      return category;
    }

    if (value.slug) {
      const category = await this.repository.findOneBy(value);
      if (!category) {
        throw new HttpException(
          'такой категории не существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      return category;
    }
    throw new HttpException('неверный формат данных', HttpStatus.NOT_FOUND);
  }

  async findByFilter(searchParams) {
    const { name, description, active, search, page, pageSize, sort } =
      searchParams;
    const numberOfOrders = pageSize ? pageSize : 2;

    console.log(active, typeof active);

    if (search) {
      return search;
    } else {
      return (
        this.repository
          .createQueryBuilder('category')
          // .where('category.name ilike :name', { name: `%${name}%` })
          .where('category.name ilike :name', { name })
          .andWhere('category.active = :active', { active })
          // // .orWhere('category.description = :description', {
          //   description: description,
          // })
          .limit(numberOfOrders)
          .getMany()
      );
    }

    return searchParams;
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

  // findAll() {
  //   return this.repository
  //     .createQueryBuilder('category')
  //     .orderBy('category.createdDate', 'DESC')
  //     .limit(2)
  //     .getMany();
  // }
}
