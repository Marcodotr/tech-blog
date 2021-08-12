const router = require('express').Router();
const { user, posts } = require('../../models');
const withAuth = require('../../utils/auth')

// The `/api/patient` endpoint

router.get('/', async (req, res) => {
  try {
    const allPosts = await posts.findAll({});

    // console.log(allPatients)
    const post = allPosts.map((postList) => postList.get({ plain: true })
    //.map new array patientlist is new variable // then gets a clean array
    );
    // console.log(patients)
    // res.status(200).json(allPatients);
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/userPosts/:id/', async (req, res) => {
  try {
    const userPosts = await posts.findAll({
      where: {'user_id': req.perams.id }
    });

    // console.log(allPatients)
    const post = userPosts.map((postList) => postList.get({ plain: true })
    //.map new array patientlist is new variable // then gets a clean array
    );
    // console.log(patients)
    // res.status(200).json(allPatients);
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,
      thisUser,
      post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async  (req, res) => {
  try {
    const thisPost = await posts.findByPk(req.params.id);

    if (!thisPost) {
      res.status(404).json({ message: 'No post with this ID' });
      return;
    }

    const currentPost = thisPost.get({ plain: true })
    
    console.log(currentPost)

    // res.status(200).json(thisPatient);
    res.render('singlePost', {
      loggedIn: req.session.loggedIn,
      currentPost
    })
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/', async (req, res) => {
  try 
  {
    // const currentUser = await user.findOne({
    //   where: { username: req.body.username }
    // })
    // console.log(currentUser)
    const newPost = await posts.create({
      title: req.body.title,
      body: req.body.body,
      // user_id: req.body.currentUser.id,
    });

    res.status(200).json(newPost);
    
  } catch (err) 
  {
    res.status(500).json(err);
  }
});



router.put('/:id',async (req, res) => {
  try {
    const newPost = await posts.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!newPost[0]) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id',async  (req, res) => {
  try {
    const delPost = await posts.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!delPost) {
      res.status(404).json({ message: 'No post with this id!' });
      return;
    }
    res.status(200).json(delPost);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;