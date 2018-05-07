import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import expressValidator from "express-validator";
import passport from 'passport';
import logger from '../utils/logger';
import authCheckMiddleware from '../middlewares/requiredAuth';

import auth from '../routes/auth';
import index from '../routes/index';
import users from '../routes/users';
import transaction from '../routes/transaction';
import mock from '../routes/mock';


const app = express();
app.use(express.static(path.join(__dirname, '/../../dist')));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
// app.use(logger('dev'));
app.use(morgan("combined", {
  "stream": logger.stream
}));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressValidator());
app.use(passport.initialize());

// pass the authorization checker middleware
app.use('/api', authCheckMiddleware);

// add routes
app.use('/', index);
app.use('/auth', auth);
app.use('/api/users', users);
app.use('/api/transaction', transaction);
app.use('/mock', mock);
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

module.exports = app;
