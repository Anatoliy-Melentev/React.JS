import React from "react";

class Constructor {
	public field: number = 123;

	constructor(arg: number) {
		this.field = arg;
	}

	public publicMethod(): number {
		return this.field
	}

	protected protectedMethod() {
		return this.field + 10;
	}

	private privateMethod() {
		return this.field + 30;
	}
}
const instance = new Constructor(123);

class Child extends Constructor {
	constructor() {
		super();
	}
	public childMethod() {

	}
	protected protectedMethod(): number {
		return super.protectedMethod();
	}
}

abstract class AbstractClass {
	public abstract abstractField: number;

	public abstract abstractMethod(): number;

	protected protectedMethod() {
		return this.abstractField;
	}
}

class NewChild extends AbstractClass {
	public abstractField: number = 123;

	public abstractMethod(): number {
		return this.protectedMethod();
	}
}

interface MyInterface<T> {
	field: string
	method(): string
}

class NewClass<T> implements MyInterface<T> {
	public field: string = '123';
	public conf?: T;

	public method(): string {
		return '';
	}
}

class MyComponent extends React.Component<{ prop1: number }, { state1: string}> {
	constructor(props: { prop1: number }) {
		super(props);
		this.state = {
			state1: '123'
		}
	}
	public render() {
		return (
			<div>{this.props.prop1}</div>
		)
	}
}