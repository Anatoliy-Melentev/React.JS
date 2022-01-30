import { hot } from 'react-hot-loader/root';
import React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

interface IStarWarsNameClassState {
	name: string;
	count: number;
}

export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {
	state: Readonly<IStarWarsNameClassState> = { name : this.randomName(), count: 0 };

	public render() {
		return (
			<section>
				<span>{this.state.name}</span>
				<div />
				<button onClick={this.handleClick}>Мне нужно имя??</button>
			</section>
		)
	}

	private handleClick = () => {
		this.setState({ name: this.randomName() });
		this.setState(
			(state, props) => ({ count: state.count + 1 }),
				() => { console.log(this.state.count); },
			);
		this.setState(
			(state, props) => ({ count: state.count + 1 }),
			() => { console.log(this.state.count); },
		);
	}

	private randomName(): string {
		return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
	}
}

