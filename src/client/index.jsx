import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "../shared/Header";
import { StarWarsNameClass } from "../shared/stateExamples/StarWarsNameClass/StarWarsNameClass";

const StarWars = new StarWarsNameClass();
const StarWarsFn = StarWars.render();

window.addEventListener('load', () => {
  ReactDOM.hydrate(<StarWarsFn />, document.getElementById('react-root'));
});
