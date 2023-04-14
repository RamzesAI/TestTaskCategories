import { Category } from '../entities/category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryRequestDto extends Category {
  @ApiProperty({ readOnly: true })
  id: string;
  @ApiProperty({ readOnly: true })
  slug: string;
}
