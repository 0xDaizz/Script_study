// import readline
import { createInterface } from 'readline';

// 1~100 random number
const targetNumber = Math.floor(Math.random() * 100) + 1;

// set input/output streams via createInterface
const rl = createInterface({    // RL 임. R1 아님..
    input: process.stdin, // get user input via terminal
    output: process.stdout // put output to terminal
});

// 이 함수는 사용자로부터 입력을 받아 숫자로 변환하고 반환하는 Promise를 생성합니다.
function getUserGuess(): Promise<number> {
    return new Promise(resolve => {
        rl.question("Guess a number between 1 and 100.\n", (answer) => {
            const guess = parseInt(answer, 10);
         resolve(guess);
        });
    });
}

// 비동기 함수입니다. 이 함수는 getUserGuess 함수가 반환하는 Promise가 해결될 때까지 기다립니다.
async function startGame() {
    let remainingAttempts = 7;
    let guessedCorrectly = false;

    while (remainingAttempts > 0 && !guessedCorrectly) {
        const userGuess: number = await getUserGuess(); // await 을 사용했음. getUserGuess 함수를 호출하고, 결과값이 돌아올 때까지 기다림.
        remainingAttempts--;

        if (userGuess === targetNumber) {
            guessedCorrectly = true;
            console.log(`You win! You have used ${7 - remainingAttempts} attempts.`);
            rl.close();
        } else if (userGuess > targetNumber) {
            console.log(`Too big! ${remainingAttempts} attempts left.`);
        } else {
            console.log(`Too small! ${remainingAttempts} attempts left.`);
        }
    
        if ((remainingAttempts === 0) && (guessedCorrectly === false)) {
            console.log(`Game over! You lose. \n The correct answer was ${targetNumber}.`);
            rl.close(); // Close readline interface in case of end.
        }
    }
}

startGame();
