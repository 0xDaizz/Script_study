// 1. Generic Fn
function firstReturn<T>(arr: Array<T>): T | null {
    return (arr.length === 0) ? null : arr[0];
}


// 2. Interface Extension
interface Person {
    name: string,
    age: number,
}

interface Employee extends Person {
    position: string,
}


// 3. Enum
enum DaysOfTheWeek {
    Sunday = "sunday",
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday"
}

const getTuesday = DaysOfTheWeek.Tuesday;

// Date 객체를 활용해 현재 요일을 가져오는 방법?

function getToday(): DaysOfTheWeek {
    const today = new Date();
    const day = today.getDay(); // 0 = sunday, 6 = saturday

    switch (day) {
        case 0:
            return DaysOfTheWeek.Sunday;
        case 1:
            return DaysOfTheWeek.Monday;
        case 2:
            return DaysOfTheWeek.Tuesday;
        case 3:
            return DaysOfTheWeek.Wednesday;
        case 4:
            return DaysOfTheWeek.Thursday;
        case 5:
            return DaysOfTheWeek.Friday;
        case 6:
            return DaysOfTheWeek.Saturday;
        default:
            throw new Error(`Invalid day: ${day}`);
    }
}

console.log(getToday());



// 4. Type Assertion
let foo: any = 10;
let bar: any = "5";

// @ts-ignore
const splitted = (<string>foo).split('');
// @ts-ignore
const barSquared = (bar as number) ** 2;


// 5. Decorator

// 이건 사실... 복잡하게 쓰는 것보다, 간편한 라이브러리가 무조건 있을 것이라 생각한다.
// 패스. 라이브러리 가져다 쓰면 될 듯.


// 6. Tuple
type Point = [x: number, y: number];

const A: Point = [4, 7];

function distanceFromZero(point: Point): number {
    let squareSum: number = (point[0])**2 + (point[1])**2;

    return Math.sqrt(squareSum);
}

console.log(distanceFromZero(A));


// 7. Namespace
export namespace Animal {   // 외부에서 사용하려면 export 해야 함 
    class Dog {
        speak() {
            console.log(`개는 멍멍`);
        }
    }

    class Cat {
        speak() {
            console.log(`고양이는 냐옹`);
        }
    }

    class Horse {
        speak() {
            console.log(`말은 히힝`);
        }
    }
}


// 8. Promise & async, await
function fetchData(): Promise<string> {
    return new Promise((resolve) => 
    setTimeout(() => {
        resolve('Success')        
    }, 1000));
}

async function run() {
    const data: string = await fetchData();
    console.log(data);
}


// 9. TypeGuard
function isString(input: any): boolean {
    return (typeof input === 'string');
}

// or..

const _isString = (input: any): boolean => typeof input === 'string';


// 10. Optional Chaining & Nullish Coalescing
type NestedObject = {
    prop1?: {
        prop2?: {
            prop3?: string;
        };
    };
};

let obj: NestedObject;

//@ts-ignore
const getProp3 = obj.prop1?.prop2?.prop3 ?? 'Not Available';