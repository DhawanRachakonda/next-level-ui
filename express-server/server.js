const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// const multer = require('multer');
// const upload = multer();

const port = 3003;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/v1/auth/oauth/token', (req, res) => {
  const response = require(`./mocks/login.json`);
  res.json(response);
});

app.get('/api/v1/auth/user/privileges', (req, res) => {
  const response = require(`./mocks/get_privileges.json`);
  res.json(response);
});

app.post('/api/vi/upload', upload.single('files'), (req, res) => {
  const methodName = req.method.toLowerCase();
  const fileName = req.body.fileName;
  const [, ext] = fileName.split('.');
  const response = require(`./mocks/${methodName}_upload_${ext}.json`);
  res.json(response);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
