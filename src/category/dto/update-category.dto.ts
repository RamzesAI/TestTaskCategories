import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsDate, IsString } from 'class-validator';
import { CreateCategoryRequestDto } from './create-category.dto';

export class UpdateCategoryRequestDto extends PartialType(CreateCategoryRequestDto) {
  @IsString({ message: 'значение должно быть строкой' })
  slug: string;

  @IsString({ message: 'значение должно быть строкой' })
  name: string;

  @IsString({ message: 'значение должно быть строкой' })
  description: string;

  // @IsDate()
  createdDate: Date;

  @IsBoolean({ message: 'значение должно быть логическим' })
  active: boolean;
}
