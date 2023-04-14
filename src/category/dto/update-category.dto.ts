import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsString({ message: 'значение должно быть строкой' })
  slug: string;

  @IsString({ message: 'значение должно быть строкой' })
  name: string;

  @IsString({ message: 'значение должно быть строкой' })
  description: string;

  createdDate: Date;

  @IsString({ message: 'значение должно быть логическим' })
  active: boolean;
}
