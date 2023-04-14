import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetCategoryByIdOrSlug {
  @ApiProperty({ required: false })
  @IsString()
  id?: string;

  @ApiProperty({ required: false })
  @IsString()
  slug?: string;
}
