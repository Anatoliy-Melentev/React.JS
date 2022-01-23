import { hot } from 'react-hot-loader/root';
import React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

export class StarWarsNameClass extends React.PureComponent {
	public render() {
		return (
			<section>
				<span>{this.randomName()}</span>
				<div></div>
				<button>Мне нужно имя</button>
			</section>
		)
	}

	private randomName(): string {
		return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
	}
}

