const Comment = require('../models/Comment');
const commentData = [
    {
        "comment_text": "Great blog about the importance and usefullness of MVC!",
        "blog_id":1,
        "user-id":2
    },
    {
        "comment_text": "Super useful stuff here about Sequelize and ORM! Love it!",
        "blog_id":2,
        "user-id":3
    },
    {
        "comment_text": "WOW! Great post about MySQL and relational databases :)",
        "blog_id":3,
        "user-id":1
    },
];

const seedComment = () => Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });;

module.exports = seedComment;