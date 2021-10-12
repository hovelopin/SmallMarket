import { Sms } from '../model/sms.js';
import { User } from '../model/user.js';
import SQ from 'sequelize';

const Sequelize = SQ.Sequelize;

const INCLUDE_USER = {
  attributes: [
    'id',
    'text',
    'createdAt',
    'userId',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};


export async function getAll() {
  return Sms.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return Sms.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return Sms.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(text, userId) {
  return Sms.create({ text, userId }) 
    .then((data) => this.getById(data.dataValues.id));
}

export async function update(id, text) {
  return Sms.findByPk(id, INCLUDE_USER)
    .then((sms) => {
      sms.text = text;
      return sms.save();
    });
}

export async function remove(id) {
  return Sms.findByPk(id)
    .then((sms) => {
      sms.destroy();
    });
}