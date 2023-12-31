const router = require('express').Router();
const BlogPost = require('../../models/BlogPost');
const withAuth = require('../../utils/auth');

// create new blog post
router.post('/', withAuth, async (req, res) => {
    try {
      const newBlog = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// update post by id
router.put('/edit-post/:id', withAuth, async (req, res)=>{
    try {
      const blogData = await BlogPost.update({
        title: req.body.title,
        content: req.body.content
      }, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id
        }
      });
      if (!blogData) {
        res.status(404).json({ message: 'No blog post found with this is' });
        return;
      }
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
// delete post
router.delete('/edit-post/:id', withAuth, async (req, res) => {
    try {
      const blogData = await BlogPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog post found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;