import { Category } from './../src/category/entities/category.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'categories_db_service',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'categories',
  entities: [Category],
  migrations: ['dist/db/migrations/*.*'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
