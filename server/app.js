const express = require('express');
const cors = require('cors');

require('dotenv').config();

//console.log(process.env);

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json({ limit: '5mb' }));
app.use('/api/image', require('./routes/image'));

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}.`)
);
