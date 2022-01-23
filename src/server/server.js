import express from 'express';//const express = require('express');
import ReactDOM from 'react-dom/server';
import { Header } from '../shared/Header';
import { StarWarsNameClass } from "../shared/stateExamples/StarWarsNameClass/StarWarsNameClass";
import { indexTemplate } from './indexTemplate';

const app = express();

const StarWars = new StarWarsNameClass();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(StarWarsFn.render())));
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});