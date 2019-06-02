const express = require('express')
const router = express.Router();
const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategory,
    listBySearch,
    photo
} = require('../controllers/product');
const {requireSignin, isAuth, isAdmin} = require('../middlewares/auth');
const {userById} = require('../controllers/user');

router.get('/', list);
router.get('/:productId', read);
router.get('/related/:productId', listRelated);
router.get('/categories', listCategory);
router.post("/by/search", listBySearch);
router.get('/photo/:productId', photo);

router.post('/:userId', requireSignin, isAdmin, isAuth, create);
router.delete('/:productId/:userId', requireSignin, isAdmin, isAuth, remove);
router.put('/:productId/:userId', requireSignin, isAdmin, isAuth, update);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;