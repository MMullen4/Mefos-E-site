const sequelize = require('../config/connection');
const seedComputers = require('./computer');
const seedLaptops = require('./laptop');
const seedSmartPhones = require('./smartPhone');
const seedSmartWatch = require('./smartWatch');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComputers();

  await seedLaptops();

  await seedSmartPhones();

  await seedSmartWatch();

  process.exit(0);
};
seedAll();