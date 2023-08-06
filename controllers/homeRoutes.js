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

router.get('/dashboard', withAuth, async (req, res)=>{
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password']
            },
            include: [{
                model: BlogPost
            }]
        });
        const user = userData.get({ plain:true });
        res.render('dashboard', {
            ...user,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/dashboard');
		return;
	}

	res.render('login');
});

module.exports = router;