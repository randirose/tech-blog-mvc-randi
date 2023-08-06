const sequelize = require('../config/connection');
const seedBlogData = require('./blogData');
const seedComment = require('./commentData');
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUser();

  await seedBlogData();

  await seedComment();

  process.exit(0);
};

seedAll();