import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  host: process.env.DB_HOST!,
  port: +process.env.DB_PORT!,
  database: process.env.DB_NAME!,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  },
  define: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
});