const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', async (req,res)=>{
    try {
        const blogData = await BlogPost.findAll({
            include: [{
                model: User,
                attributes: ['username']
            }]
        });
        const blogPosts = blogData.map((blogPost)=> blogPost.get({ plain:true }));
        res.render('homepage', {
            blogPosts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blogpost/:id', withAuth, async (req,res)=>{
    try {
        const blogData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username']
                }, {
                    model: Comment,
                    include: [User]
                }
            ]
        });
        const blogPost = blogData.get({ plain:true });
        res.render('blogPost', {
            ...blogPost,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;