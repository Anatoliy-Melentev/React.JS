import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import { createLink } from "../utils/js/createLink";
import axios from 'axios';
import compression from 'compression';

const URI = process.env.URI || 'reddit.making-web.ru';
const CLIENT_ID = process.env.CLIENT_ID || 'xX_UPv8JbH-ZK_TPvrYqPA';
const CLIENT_SECRET = process.env.CLIENT_SECRET || 'tzi2H-iFYglGeJD_TATqITeuGhVKtQ';

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if (IS_DEV) {
  app.use(compression());
}

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      createLink('', {
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: `http://${URI}/auth`,
      }),
      {
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .then(({ data }) => res.send(indexTemplate(
      ReactDOM.renderToString(App),
      data['access_token'],
      CLIENT_ID,
      `http://${URI}/auth`,
    )))
    .catch(console.log);
});

app.get('/*', (req, res) => {
    res.send(indexTemplate(
      ReactDOM.renderToString(App),
      '',
      CLIENT_ID,
      `http://${URI}/auth`,
    ));
});

app.listen(PORT, () => console.log(`Server started on http://${URI}`));