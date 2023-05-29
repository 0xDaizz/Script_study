// 1. FizzBuzz
function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
// Nice.

//-----------------------------------------------------

// 2. Factorial
function factorial(n: number): number {
    // Integer
    if (n !== Math.floor(n) || n < 0) {throw new Error;}
    // if n === 0
    if (n === 0) {return 1;}

    let multipled = 1;

    for (let i = 1; i <= n; i++) {
        multipled *= i;
    }

    return multipled;
}
// Nice.

//-----------------------------------------------------

// 3. Fibbonaci Sequence
function fibonnaci(n: number): number[] {
    // Integer
    if (n !== Math.floor(n) || n < 0) {throw new Error;}
    // if n === 0
    if (n === 0) {return [];}
    // if n === 1
    if (n === 1) {return [1];}
    // if n === 2
    if (n === 2) {return [1, 1];}

    let fiboArray = [1, 1];

    for (let i = 2; i < n; i++) {
        const newNum: number = fiboArray[i-1] + fiboArray[i-2];
        fiboArray.push(newNum);
    }

    return fiboArray;
}
// Nice.
// Would be great if : eliminate n === 1, 2, and initiate the fiboarray with [0, 1] and do loop n times.
//-----------------------------------------------------


// 4. Palindromes
function isPalindrome(str: string): boolean {
    const reversed: string = str.split('').reverse().join('');

    return reversed === str;
}
// Good.
// join() method basically return string with ','. so I have to add (''). so, join() -> join('')

//-----------------------------------------------------

// 5. TS Class
class Student {
    name: string;
    id: number;
    grade: number;

    // 학생 정보 출력 메서드는 어떻게하지..

    constructor(name: string, id: number, grade: number) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
}
// Good, would be better if add calling method.

// printInfo() {
//    console.log(`Name: ${this.name}, ID: ${this.id}, Grade: ${this.grade}`);
// }


//-----------------------------------------------------

// 6. Prime numbers
function isPrime(n: number): boolean {
    // Integer, n < 2
    if (n !== Math.floor(n) || n < 2) {throw new Error;}

    let i = 2;
    do {
        if (n % i === 0) {return false;}
        i++;
    } while (i < n);

    return true;
}
// Nice.
// One tip : to save resource, it is enough to test up to i <= sqrt(n).

// while (i <= Math.sqrt(n));

//-----------------------------------------------------