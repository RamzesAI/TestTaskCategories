import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'значение должно быть строкой' })
  slug: string;

  @IsString({ message: 'значение должно быть строкой' })
  name: string;

  @IsString({ message: 'значение должно быть строкой' })
  description?: string;

  createdDate: Date;

  @IsBoolean({ message: 'значение должно быть логическим' })
  active: boolean;
}
