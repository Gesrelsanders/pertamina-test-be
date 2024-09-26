const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwtConfig');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).send('Token required.');

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(403).send('Token required.');

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send('Invalid token.');
    
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
