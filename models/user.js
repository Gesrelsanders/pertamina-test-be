const bcrypt = require('bcryptjs');

const users = [
  { id: 1, email: 'demo@minimals.cc', password: bcrypt.hashSync('@demo1', 8) },
];

module.exports = users;
