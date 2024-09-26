// models/user.js
const bcrypt = require('bcryptjs');

// Mock user data (replace with DB in production)
const users = [
  { id: 1, email: 'demo@minimals.cc', password: bcrypt.hashSync('@demo1', 8) },
];

module.exports = users;
