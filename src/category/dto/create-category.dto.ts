import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoryRequestDto {
  @ApiProperty()
  @IsString({ message: 'значение должно быть строкой' })
  slug: string;

  @ApiProperty()
  @IsString({ message: 'значение должно быть строкой' })
  name: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'значение должно быть строкой' })
  description?: string;

  @ApiProperty()
  @IsBoolean({ message: 'значение должно быть логическим' })
  active: boolean;
}
