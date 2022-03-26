import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import { createLink } from "../utils/js/createLink";
import axios from 'axios';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      createLink('', {
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: process.env.URI + '/auth',
      }),
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.CLIENT_SECRET
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .then(({ data }) => res.send(indexTemplate(
      ReactDOM.renderToString(App),
      data['access_token'],
      process.env.CLIENT_ID,
      process.env.URI + '/auth'
    )))
    .catch(console.log);
});

app.get('/*', (req, res) => {
    res.send(indexTemplate(
      ReactDOM.renderToString(App),
      '',
      process.env.CLIENT_ID,
      process.env.URI + '/auth'
    ));
});

app.listen(PORT, () => console.log(`Server started on ${process.env.URI}`));