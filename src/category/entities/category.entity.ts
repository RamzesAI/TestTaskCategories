import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column()
  active: boolean;
}
