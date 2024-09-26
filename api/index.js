const express = require('express');
const router = express.Router();

const signInRoute = require('./auth/sign-in');
const meRoute = require('./auth/me');  // Import the new /me route
const itemsRoute = require('./product/items');

router.use('/auth/sign-in', signInRoute);
router.use('/auth/me', meRoute); // Add /auth/me route
router.use('/product', itemsRoute);

module.exports = router;
