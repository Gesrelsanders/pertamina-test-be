require('dotenv').config();
const express = require('express');
const cors = require('cors');  // Import cors
const app = express();

app.use(cors());

const apiRoutes = require('./api');
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
