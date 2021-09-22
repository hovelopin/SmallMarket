import { config } from '../config.js';
import SQ from 'sequelize';

const { host, user, database, password } = config.databse;

export const sequelize = new SQ.sequelize(databse, user, password, {
  host,
  dialect: 'mysql',
  logging: false,
});