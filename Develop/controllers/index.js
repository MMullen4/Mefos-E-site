const router = require('express').Router();
const authRoutes = require('./authRoutes');
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;