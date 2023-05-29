import { createInterface } from 'readline';

type Board = string[][];

let board: Board = Array(3).fill(null).map(() => Array(3).fill(' '));

function printBoard(board: Board): void {
    for (let i = 0; i < 3; i++) {
        console.log(board[i].join(' | '));
        if (i < 2) {
            console.log('---------');
        }
    }
}

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

function getUserNumber(): Promise<string> {
    return new Promise(resolve =>
        rl.question("Enter a number 1~9, on the board.", answer => {
            resolve(answer)
        }));
}

function gameWinner(board: Board): string | null {
    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === board[i][1] && board[i][1] === board[i][2]) && board[i][0] != ' ') {
            return board[i][0];
        }
    }

    for (let j = 0; j < 3; j++) {
        if ((board[0][j] === board[1][j] && board[1][j] === board[2][j]) && board[0][j] != ' ') {
            return board[0][j];
        }
    }

    if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0]) && board[1][1] != ' ') {
        return board[1][1];
    }
    
    return null;
}

function isBoardFull(board: Board): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === ' ') {
                return false;
            }
        }
    }
    return true;
}

function numToBoard(num: number): [number, number] {
    const row = Math.floor((num - 1) / 3);
    const column = (num - 1) % 3;
    return [row, column];
}

async function startGame() {
    printBoard(board);

    while (true) {
        let userInput: string;
        do {
            userInput = await getUserNumber();
        } while (!(Number(userInput) >= 1 && Number(userInput) <= 9));

        const [userRow, userColumn] = numToBoard(Number(userInput));
        board[userRow][userColumn] = 'X';
        
        printBoard(board);

        if (gameWinner(board) === 'X') {
            console.log(`You won the game!`)
            break;
        }

        let computerNum: number;
        let compRow: number;
        let compColumn: number;

        do {
            computerNum = Math.floor(9 * Math.random() + 1);
            [compRow, compColumn] = numToBoard(computerNum);
        } while (board[compRow][compColumn] != ' ');

        board[compRow][compColumn] = 'O';

        printBoard(board);

        if (gameWinner(board) === 'O') {
            console.log(`You lost the game!`);
            break;
        }

        if (isBoardFull(board)) {
            console.log(`Tie! Game over.`);
            break;
        }
    }
}

startGame();
