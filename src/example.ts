const str = 'string'; // typeof str -> 'strung'
const num = 2; // typeof num -> 'number'
const nan = NaN; // typeof nan -> 'number'
const obj = {}; // typeof obj -> 'object'
const arr = []; // typeof arr -> 'object'
const nul = null; // typeof nul -> 'object'
const sym = Symbol(); // typeof sym -> 'symbol'
const und = undefined; // typeof und -> 'undefined'
const _void = void 0; // typeof _void -> 'undefined'
const bool = true; // typeof bool -> 'boolean'
const fn = () => {}; // typeof fn -> 'function'

let tsStr: string = 'asd';
tsStr = '1';

const numbers = 2;
const strings = 'str';

const res = parseInt(strings) - numbers
// Union type
const strOrNumber: string | number = 2;
// type alias
type StrOrNumber = string | number;
const strOrNumber2: StrOrNumber = '2';
type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;
type StrangeTsTypes = any | unknown | never;
//Array
const tsArray: number[] = [1, 2, 3]
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, '3'];
const unionArray2: Array<string | number> = [1, 2, '3'];
//Tuple
const myTuple: [number, string] = [1, '2'];
//Object
const myObj: { a: number, b: string } = { a: 1, b: '2' };

type MyObjType = { a: number, b: string }
const myObj2: MyObjType = { a: 1, b: '2' };

interface MyFirstInterface {
	readonly a: number;
	b: string;
	c?: number[];
	e: number | undefined
}
const myObj3: MyFirstInterface = {
	a: 2,
	b: '3',
	//c: [1],
	e: undefined
}

const value = myObj3.c

const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd' };

interface IndexInterface {
	[n: string]: string;
}

const val3 = ApiAnswer.randomkey;

enum Methods {
	add,
	sub,
}

function calculate(method: Methods, left: number, right: number): number {
	switch (method) {
		case Methods.add: return left + right;
		case Methods.sub: return left - right;
	}
}

const sum = calculate(Methods.add, 2, 3);

const ArrowFn: FnInterface = (value) => 2;

type TypeFn = () => number;

interface FnInterface {
	(a: number): void;
}

const some: any = '2'; //All Types
some.reduce();

const un: unknown = '2'; //No Types
un.reduce();

function neverFn(): never { // функция которая никогда не дойдет до конца

}

const someValue = neverFn()