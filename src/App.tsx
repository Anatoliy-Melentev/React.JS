import { hot } from 'react-hot-loader/root';
import * as React from "react";
import { Header } from './shared/Header';
import { StarWarsNameClass } from "./shared/stateExamples/StarWarsNameClass/StarWarsNameClass";
import { ThrowName } from "./shared/stateExamples/StarWarsNameClass/StarWarsNameFunction";
import { Names } from "./shared/componentsExamples/Names/Names";

function AppComponent() {
	return (
		<>
			<Header />
			<Names />
			<ThrowName />
			<StarWarsNameClass />
		</>
	)
}

export const App = hot(AppComponent);