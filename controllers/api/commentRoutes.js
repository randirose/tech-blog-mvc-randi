const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments for a post
router.get('/', withAuth, async (req,res)=>{
    try {
        const commentData = await Comment.findAll({
            include: [{
                model: User,
                attributes: ['username']
            }]
        });
        const comments = commentData.map((comment)=> comment.get({ plain:true }));
        res.render('comments', {
            comments,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// add a comment
router.post('/', withAuth, async (req, res)=>{
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;