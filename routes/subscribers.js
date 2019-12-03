const router = require('express').Router();
const subscribersController = require('../controllers/subscribers');

router.get(
    '/',
    subscribersController.get
);

router.get(
    '/:id',
    subscribersController.getById
);

router.post(
    '/',
    subscribersController.post
);

router.patch(
    '/:id',
    subscribersController.patch
);

router.delete(
    '/:id',
    subscribersController.delete
);

module.exports = router;