const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

//console.log(process.env);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/image', require('./routes/image'));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}.`)
);
