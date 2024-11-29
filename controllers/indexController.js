const { Op } = require('sequelize');
const models = require('../models');

const showMenu = async (req, res) => {
  const page = isNaN(req.query.page) ? 1 : parseInt(req.query.page);
  const limit = 6;
  const offset = (page - 1) * limit;

  const ilike = { [Op.iLike]: `%${keyword}%` };

  const condition = {
    where: {
      [Op.or]: [{ title: ilike }, { description: ilike }],
    },
    limit,
    order: [['price', 'asc']],
    offset,
  };

  // include: [
  //   { model: models.Direction, order: [['order', 'ASC']] },
  // ],

  const { count, rows: foods } = await models.Food.findAndCountAll(condition);

  res.render('index', {
    foods,
    pagination: {
      page,
      limit,
      totalRows: count,
    },
  });
};

const sendMessage = async (req, res) => {
  const data = req.body;
  data.submitted = new Date();
  data.checkStatus = false;

  await models.Reservation.create(data);
  res.json({ data });
};

const controller = {
  showMenu,
  sendMessage,
};

module.exports = controller;
