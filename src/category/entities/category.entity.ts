import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum CategoryActiveType {
  ON = 'вкл',
  OFF = 'выкл',
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  slug: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  description: string;

  @CreateDateColumn({
    name: 'created_date',
  })
  createdDate: Date;

  @Column({
    type: 'enum',
    enum: CategoryActiveType,
  })
  active: boolean;
}
