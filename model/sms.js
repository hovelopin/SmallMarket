import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { User } from './user.js';

const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

const Sms = sequelize.define('sms', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
Sms.belongsTo(User);