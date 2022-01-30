// 1. Работа с простыми типами
	function concat(a: string, b: string): string {
		return a + b;
	}

// 2. Работа с интерфейсами
	interface MyHometaskInterface {
		howIDoIt: string,
		simeArray: (number | string)[],
		withData: {
			[key: number]: {
				howIDoIt: string,
				simeArray: (number | string)[],
			}
		}
	}

	const MyHometask: MyHometaskInterface = {
		howIDoIt: "I Do It Wel",
		simeArray: ["string one", "string two", 42],
		withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
	}

// 3. Типизация функций, используя Generic
const myRArray: MyArray<number> = [1,2,3];

interface MyArray<T> {
	[n: number]: T

	reduce<U>(fn: (acc: U, value: T) => U, initialValue: U): U
}

const initialValue = 0;
myRArray.reduce((accumulator, value) => accumulator + value, initialValue);

// 4. Работа с MappedTypes
interface IHomeTask {
	data: string;
	numbericData: number;
	date: Date;
	externalData: {
		basis: number;
		value: string;
	}
}

type MyPartial<T> = {
	[N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
	externalData: {
		value: 'win'
	}
}

// TypeScript использую первый раз,
// не понимаю вообще что от меня требуется в задачах под звездочками
// но очень хотелось бы узнать
// 5*. Работа с Generic, Mapped Types, Type inference №1
function HomeComponent(props: { firstProp: string }) {
	return (
		<div>{ props.firstProp }</div>
	)
}

type FnReturnProps<T> = T extends ((props: infer R) => any) ? R : never;
type TReturnProps = FnReturnProps<typeof HomeComponent>;

// 6*. Работа с Generic, Mapped Types, Type inference №2
type TDivElement = JSX.IntrinsicElements['div'];

type TPropProps = TGetJSXPropsProp<T> = {
	JSX.IntrinsicElements[T]
}

const props: TPropProps<'A'> = {
	some: '1233', // throw error потому что не содержится в атрибутах div
	className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}