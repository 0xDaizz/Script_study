// import readline
import { createInterface } from 'readline';

// 단어 리스트
const words = ["apple", "banana", "orange", "grape", "melon"];

// readline interface 생성
const rl = createInterface({
    input: process.stdin,  // terminal을 통한 입력
    output: process.stdout // terminal로의 출력
});

// user input = Promise
function getUserInput(): Promise<string> {
    return new Promise(resolve => {
        rl.question("Enter a word:\n", answer => {
            resolve(answer);
        });
    });
}

// Main game logic
async function startGame() {
    console.log("Starting the game!");

    const wordIndex = Math.floor(Math.random() * words.length);
    const targetWord = words[wordIndex];
    let userInput;

    try {
        userInput = await getUserInput();

        if (userInput.toLowerCase() === targetWord) {
            console.log("Correct!");
        } else {
            console.log("Incorrect!");
        }
    } catch (error) {
        console.error("Error:", error);
    } finally {
        rl.close();
    }
}

// 게임 실행
startGame();
