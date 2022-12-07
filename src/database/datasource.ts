import "dotenv/config";

import * as path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

import CompanyFactory from "./factories/company";
import ReviewFactory from "./factories/review";
import UserFactory from "./factories/user";
import CompanySeeder from "./seeds/company";
import ReviewSeeder from "./seeds/review";
import ReviewAsSeeder from "./seeds/reviewAs";
import RoleSeeder from "./seeds/role";
import UserSeeder from "./seeds/user";
console.log(process.env.DB_HOST,"asdasdasd");

const options: DataSourceOptions & SeederOptions = {
  type: process.env.DB_DRIVER as "mysql",
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  seeds: [RoleSeeder, UserSeeder, CompanySeeder, ReviewSeeder, ReviewAsSeeder],
  factories: [UserFactory, CompanyFactory, ReviewFactory],
  migrations: [path.join(__dirname + "/migrations/*{.js,.ts}")],
  entities: [path.join(__dirname + "/../modules/**/entities/*{.js,.ts}")],
  logging:true,
  extra:{
    socketPath: process.env.DB_HOST
  }
};

const AppDataSource: DataSource = new DataSource(options);

export default AppDataSource;
