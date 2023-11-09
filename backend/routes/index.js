const router = require('express').Router();

const userRouter = require('./users');
const cardRouter = require('./cards');

router.use('/api/users', userRouter);
router.use('/api/cards', cardRouter);

module.exports = router;
