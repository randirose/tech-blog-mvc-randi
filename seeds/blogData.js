const BlogPost = require('../models/BlogPost');
const blogData = [
    {
        "title": "Learning about MVC",
        "content": "MVC stands for Model-View-Controller. It is a pattern in web development used to organize user interfaces, data, and controlling logic. It uses the 'separation of concerns' principal, which makes for a better division of logic and labor, and makes your code easier to improve and maintain.",
    },
    {
        "title": "Learning about Sequelize and ORM",
        "content": "Sequelize is a Node.js-based Object Relational Mapper (ORM), that makes it easy to work with MySQL. An Object Relational Mapper can handle functions involving your MySQL database using JavaScript objects to represent your data, instead of using MySQL syntax.",
    },
    {
        "title": "Learning about MySQL",
        "content": "MySQL is a Structured Query Language designed to manage data, including updating, retrieving, and creating data, in a table-based relational database management system. MySQL must be downloaded on your local machine, and installed as a npm package (MySQL2) to use with Node.js. Check out the Sequelize blog to see how to use it with JavaScript.",
    }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });;

module.exports = seedBlogPost;