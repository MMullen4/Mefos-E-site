const sequelize = require('../config/connection');
const seedComputers = require('./computerData');
const seedLaptops = require('./laptopData');
const seedSmartPhones = require('./smartPhoneData');
const seedSmartWatch = require('./smartWatchData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

  await seedComputers();

  await seedLaptops();

  await seedSmartPhones();

  await seedSmartWatch();

  process.exit(0);
};
seedAll();