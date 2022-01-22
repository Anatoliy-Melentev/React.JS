const myArray: MyArray<number> = [1,2,3];

interface MyArray<T> {
	[n: number]: T

	map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
}

let myVariable = myArray[1];
myArray.map(f =>  f + 1);
myArray.map(f => `f + ${f}`);

[1,2,3].map((f, i, a) => f + 1);
[1,2,3].map((f, i, a) => `f + ${f}`);

function identity<T>(arg: T): T {
	return arg;
}

let result = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
	return arr.length;
}

getLen([1,2,3]);

interface IValueWithType<T> {
	type: string;
	value: T
}

function withType<U>(arg: U): IValueWithType<U> {
	return {
		type: typeof arg,
		value: arg
	}
}

const result2 = withType(123)

//Встоенные generics

interface IExample<T> {
	type: string;
	value: T;
	isEmpty: boolean;
}

const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
	type: 'asd'
}

const picked: Pick<IExample<number>, 'isEmpty'> = {
	isEmpty: true
}

const partial: Partial<IExample<object>> = {
	isEmpty: true
}