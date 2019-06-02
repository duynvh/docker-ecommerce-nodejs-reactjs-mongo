const express = require('express')
const router = express.Router();
const {
    create,
    categoryById,
    read,
    list,
    remove,
    update
} = require('../controllers/category');
const {requireSignin, isAuth, isAdmin} = require('../middlewares/auth');
const {userById} = require('../controllers/user');

router.get('/', list);
router.get('/:categoryId', read);
router.post('/:userId', requireSignin, isAdmin, isAuth, create);
router.delete('/:categoryId/:userId', requireSignin, isAdmin, isAuth, remove);
router.put('/:categoryId/:userId', requireSignin, isAdmin, isAuth, update);
router.param("userId", userById);
router.param("categoryId", categoryById);

module.exports = router;