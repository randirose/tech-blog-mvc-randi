const User = require('../models/User');
const userData = [
    {
        "username": "John123",
        "password": "abcd1234",
    },
    {
        "username": "Lucy123",
        "password": "abcd1234",
    },
    {
        "username": "Will123",
        "password": "abcd1234",
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });;

module.exports = seedUser;