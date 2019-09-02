import { isGameOver, changePlayer, setDisability, grid } from './Tic-Tac-toe';
import { XO } from './interface'

describe('TicTacToe', () => {

    it('should be game over when all fields in a row are taken by a player', () => {
        const field: XO[] = ["X", "X", "", "X", "", "O", "X", "X", "X"]
        let result: boolean = isGameOver(field);

        expect(result).toEqual(true);
    });

    it('should be game over when all fields in a collumn are taken by a player', () => {
        const field: XO[] = ["X", "X", "", "X", "X", "O", "X", "X", "X"]
        let result: boolean = isGameOver(field);

        expect(result).toEqual(true);
    });

    it('should be game over when all fields in a diognale are taken by a player', () => {
        const field: XO[] = ["X", "X", "", "X", "X", "O", "X", "X", "X"]
        let result: boolean = isGameOver(field);

        expect(result).toEqual(true);
    });

    it('should let players take turns taking fields until the game is over', () => {
        const result = changePlayer('O');

        expect(result).toEqual('X');
    });

    it('should be - game is over when all fields are taken', () => {
        const field: XO[] = ["X", "X", "O", "O", "O", "X", "O", "X", "X"]
        let result: boolean = isGameOver(field);

        expect(result).toEqual(true);
    });

    it('should have two players in the game (X and O)', () => {
        const result: string[] = [];
        let activePlayer = 'O';
        for (let i = 0; i < 9; i++) {
            result.push(activePlayer);
            activePlayer = changePlayer(activePlayer);
        }

        expect(result).toEqual(['O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O']);
    });

    it('game has nine fields in a 3x3 grid', () => {
        const result = grid.length;

        expect(result).toEqual(9);
    });

    it('a player can take a field if not already taken', () => {
        const field: XO[] = ["X", "X", "", "O", "O", "X", "O", "X", "X"]
        const result = setDisability(field, 1);

        expect(result).toEqual(true);
    });
})