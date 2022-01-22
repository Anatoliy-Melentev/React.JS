const mistake = [] as Array<number>;

let bigObject = {
	"title": "Years with Frank Lloyd Wright",
	"subtitle": "Apprentice to Genius",
	"authors": [
		"Edgar Tafel"
	],
	"publisher": "Courier Corporation",
	"publishedDate": "1979",
	"description": "This insightful memoir by a former apprentice presents a revealing portrait of the great American architect, providing illuminating anecdotes about Wright's Prairie home and Oak Park periods, and much more.",
	"industryIdentifiers": [
		{
			"type": "ISBN_10",
			"identifier": "0486248011"
		},
		{
			"type": "ISBN_13",
			"identifier": "9780486248011"
		}
	],
	"readingModes": {
		"text": false,
		"image": true
	},
	"pageCount": 228,
	"printType": "BOOK",
	"categories": [
		"Architecture"
	],
	"averageRating": 3.5,
	"ratingsCount": 2,
	"maturityRating": "NOT_MATURE",
	"allowAnonLogging": false,
	"contentVersion": "1.1.1.0.preview.1",
	"imageLinks": {
		"smallThumbnail": "http://books.google.ru/books/content?id=8Q1wW6Us-O0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		"thumbnail": "http://books.google.ru/books/content?id=8Q1wW6Us-O0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
	},
	"previewLink": "http://books.google.ru/books?id=8Q1wW6Us-O0C&printsec=frontcover&hl=&source=gbs_api",
	"infoLink": "http://books.google.ru/books?id=8Q1wW6Us-O0C&hl=&source=gbs_api",
	"canonicalVolumeLink": "http://books.google.ru/books/about/Years_with_Frank_Lloyd_Wright.html?hl=&id=8Q1wW6Us-O0C"
}

type TMyBigObject = typeof bigObject;

const typedBigObject: Readonly<TMyBigObject> = bigObject;

typedBigObject.title = "fgdf";
typedBigObject.readingModes.text = true;

// type MyReadonly = {
// 	readonly [N in 'asd' | 'qwe']: N
// }

// for (let N of ['asd', 'qwe']) {}

type TObjKeys = keyof TMyBigObject;
type TTitleType = TMyBigObject['title']

type MyReadonly<T> = {
	readonly [N in keyof T]: T[N]
}

const zome: MyReadonly<TMyBigObject> = {
	title: 'Years with Frank Lloyd Wright'
}

type MyPartial<T> = {
	[N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
	[N in K]: T[N];
}

type picked = Pick<TMyBigObject, 'title' | 'subtitle'>;

type MyReadonlyDeep<T> = {
	readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

typedBigObjectDeep.title = "fgdf";
typedBigObjectDeep.readingModes.text = true;

type TSomeType = MyReadonlyDeep<TMyBigObject>;

// type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number, b: string) {
	return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TArgsType = FnParameters<typeof greaterThenZero>;