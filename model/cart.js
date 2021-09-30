import SQ from 'sequelize';
import { sequelize } from '../database/database.js';

const DataTypes = SQ.DataTypes;

export const Cart = sequelize.define( // create cart schema
  'cart', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    }
  },
  { timestamps: false }
);