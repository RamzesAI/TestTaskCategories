import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @ApiProperty()
  @IsString({ message: 'значение должно быть строкой' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsString({ message: 'значение должно быть строкой' })
  @Column({
    unique: true,
  })
  slug: string;

  @ApiProperty()
  @IsString({ message: 'значение должно быть строкой' })
  @Column()
  name: string;

  @ApiProperty({ required: false })
  @IsString({ message: 'значение должно быть строкой' })
  @Column({
    nullable: true,
  })
  description?: string;

  @ApiProperty({ readOnly: true })
  @IsString({ message: 'значение должно быть строкой' })
  @CreateDateColumn({
    name: 'created_date',
  })
  createdDate: Date;

  @ApiProperty()
  @IsBoolean({ message: 'значение должно быть логическим' })
  @Column()
  active: boolean;
}
