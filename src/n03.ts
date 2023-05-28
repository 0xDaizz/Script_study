// lotto game


import { createInterface } from "readline";

// readline Interface
const rl = createInterface({
    input: process.stdin, 
    output: process.stdout,
});

function getUserNumber(): Promise<string> {
    return new Promise(resolve =>
        rl.question("input 6 numbers. ex) 1, 2, 3, 4, 5, 6 \n", answer => {
            resolve(answer)
        }));
}


async function startGame() {
    let numbers = Array.from({length: 45}, (_, i) => i + 1); // 1부터 45까지의 숫자 배열 생성

    // 배열 섞기
    for(let i = numbers.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    const lottoNumbers = numbers.slice(0, 6); // 앞에서부터 6개의 숫자 선택
    let userParsed: Array<number>;
    
    for (let userAttempts = 0; userAttempts < 5;) {
        do {
            let userInput = await getUserNumber();
            userParsed = userInput.split(', ').map(num => +num);
        
        } while (!((userParsed.length == 6) && (new Set(userParsed).size === userParsed.length) && (userParsed.every(num => !isNaN(num) && num >= 1 && num <= 45))));

        userAttempts++;
        
        const matchedCount: number = userParsed.filter((num) => lottoNumbers.includes(num)).length;

        if (matchedCount <= 5) {
            console.log(`You have ${matchedCount} correct numbers!\n${5-userAttempts} attempts left.`);
        } else if (matchedCount == 6) {
            console.log(`Congrats! You've got the correct 6 numbers! You win!`);
            rl.close();
            return;
        }
    }

console.log(`Game over! the lotto numbers were ${lottoNumbers}.\nBetter luck next time!`);
rl.close();
}

startGame();