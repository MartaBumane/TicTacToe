import { XO } from "./interface"

export let grid: XO[] = [];
if (grid.length < 1) {
    for (let i = 1; i <= 9; i++) {
        grid.push('')
    }
}

function doesPlayerOwnsRow(field: XO[]): boolean {
    let row: string[] = [];
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 3; j++) {
            row.push(field[i + j]);
        }

        if (row.every(v => v === row[0])) {
            if (row[0] !== "") {
                return true;
            }
        } else {
            row = [];
        }
    }
    return false;
}

function doesPlayerOwnsCollumn(field: XO[]): boolean {
    let coll: string[] = [];
    for (let i = 0; i < 3; i++) {
        coll.push(field[i]);
        coll.push(field[i + 3]);
        coll.push(field[i + 6]);
        if (coll.every(v => v === coll[0])) {
            if (coll[0] !== "") {
                return true;
            }
        } else {
            coll = [];
        }
    }
    return false;
}

function doesPlayerOwnsDiognale(field: XO[]): boolean {
    let diognaleLeft: string[] = [field[0], field[4], field[8]];
    let diognaleRight: string[] = [field[2], field[4], field[6]];

    if (diognaleLeft.every(v => v === diognaleLeft[0])) {
        if (diognaleLeft[0] !== "") {
            return true;
        }
    } else if (diognaleRight.every(v => v === diognaleRight[0])) {
        if (diognaleRight[0] !== "") {
            return true;
        }
    }

    return false;
}

export function isGameOver(field: XO[]): boolean {
    if (doesPlayerOwnsRow(field) || doesPlayerOwnsCollumn(field) || doesPlayerOwnsDiognale(field)) {
        return true;
    }

    if (field.every(v => v !== '')) {
        return true
    }

    return false;
}


export function gameOverStatus(field: XO[]): any {
    if (doesPlayerOwnsRow(field)) {
        return 'Player owns row';
    } else if (doesPlayerOwnsCollumn(field)) {
        return 'Player owns column';
    } else if (doesPlayerOwnsDiognale(field)) {
        return 'Player owns diognale';
    }

    if (field.every(v => v !== '')) {
        return 'Game Over, try again!';
    }

    return false;
}

export function setDisability(field: XO[], j: number) {
    if (field[j] === 'X' || field[j] === 'O') {
        return true;
    } else {
        return false;
    }
}

export function changePlayer(activePlayer: string) {
    if (activePlayer === 'O') {
        return 'X'
    } else {
        return 'O'
    }
}