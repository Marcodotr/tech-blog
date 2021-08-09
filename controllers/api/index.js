const router = require('express').Router();

const userRoutes = require('./user-routes');

const postRoutes = require('./postRoutes');

const adminTemps = require('./adminTemps');

const commentRoutes = require('./commentRoutes')



router.use('/posts', postRoutes);
router.use('/admins', adminTemps);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);



module.exports = router;
