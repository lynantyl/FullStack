const express = require('express');

const app = express();

// ***************************************************//
var cookieParser = require('cookie-parser');

var session = require('express-session');
const FileStore = require('session-file-store')(session);
const uuid = require('uuid/v4');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const axios = require('axios');

app.post('/chart1', (req, res) => {
  console.log('Inside /charts');
  res.render('chart1');
});

app.post('/chart2', (req, res) => {
  console.log('Inside /charts');
  res.render('chart2');
});

app.post('/chart3', (req, res) => {
  console.log('Inside /charts');
  res.render('chart3');
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
