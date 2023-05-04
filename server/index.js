const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
// const connect = require('./models/db.connection');
require('dotenv').config();

// app.use(bodyParser.json({limit:'50mb'})) // for uploading large file in cloudinary

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
// app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
