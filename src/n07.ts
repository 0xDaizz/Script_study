// Class, Object, Interface 특강 by ChatGPT

// 1. Interface : Class의 구조를 강제하는 역할

interface Animal {
    name: string;
    age: number;
    makeSound(): void;
}

// 이 interface는 Animal을 상속받는 모든 클래스에 대해 name, age, makeSound()를 강제로 포함하도록 함.


// 2. Class : Object를 생성하기 위한 템플릿.

class Dog implements Animal {
    name: string;
    age: number;

    // 템플릿인 Dog를 생성했는데, 이를 초기 설정 해 줘야 함. constructor가 그 역할을 함.
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound(): void {
        console.log(`멍멍!`);
    }
}

// Dog 클래스로부터 객체 생성하기
const myDog = new Dog('뽀삐', 3);

// call methods
myDog.makeSound();  // '멍멍!'
console.log(myDog.age); // 3