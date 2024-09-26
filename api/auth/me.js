const express = require('express');
const router = express.Router();
const users = require('../../models/user');
const verifyToken = require('../../middleware/verifyToken');

router.get('/', verifyToken, (req, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).send('User not found.');

  res.send({
    id: user.id,
    username: user.email,
  });
});

module.exports = router;
