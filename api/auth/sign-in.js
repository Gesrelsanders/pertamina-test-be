const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { JWT_SECRET } = require('../../config/jwtConfig');
const users = require('../../models/user');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  
  if (!user) return res.status(404).send('User not found.');
  
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) return res.status(401).send('Invalid password.');
  
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  res.send({ accessToken:token });
});

module.exports = router;
