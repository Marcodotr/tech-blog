const router = require('express').Router();
const { comments, users, posts } = require('../../models');

// The `/api/orders` endpoint

router.get('/', async (req, res) => {
  try {
    const postComments = await comments.findAll({
      include: [
        {
          model: posts,
          attributes: [ 'title', 'body' ]
        },
        {
          model: users,
          attributes: ['username', 'first_name', 'last_name']
        }
      ]
    });  

    const postComment = postComments.map((theseComments) => theseComments.get({ plain:true}))
    console.log(postComment)
    res.json(postComment)
      // .render('postCommentSec', {
      //   loggedIn: req.session.loggedIn,
      //   postComment,
      // })
      // .status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const comment = await comments.findByPk(req.params.id, {
      
    });

    if (!comment) {
      res.status(404).json({ message: 'No comment with this ID' });
      return;
    }

    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try 
  {

    const comment = await comments.create({
      // individualHooks: true,
      body: req.body.body,
    });

    res.status(200).json(comment);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const comment = await comments.update(req.body, {
      where: {
        id: req.params.id,
      },
      // individualHooks: true
    });

    if (!comment) {
      res.status(404).json({ message: 'No comment here boss!' });
      return;
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const comment = await comments.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!comment) {
      res.status(404).json({ message: 'No comment here boss!' });
      return;
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;