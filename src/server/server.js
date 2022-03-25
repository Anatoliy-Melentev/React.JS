import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import { createLink } from "../utils/js/createLink";
import { StaticRouter } from 'react-router-dom/server';
import axios from 'axios';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      createLink('', {
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: 'http://localhost:3000/auth',
      }),
      {
        auth: { username: 'VxRfhdESA8Ms6wZqVG9SFA', password: 'DpfTn6pz5CAnPRP8jQbBjcnYTvIfSw' },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .then(({ data }) => res.send(indexTemplate(ReactDOM.renderToString(App), data['access_token'])))
    .catch(console.log);
});

app.get('/*', (req, res) => {
    res.send(indexTemplate(ReactDOM.renderToString(App)));
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));