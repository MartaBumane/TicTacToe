import {isGameOver, changePlayer, setDisability ,grid} from './Tic-Tac-toe';
import {GridItem} from './interface'

describe('TicTacToe',()=>{
    
    
    it('should be game over when all fields in a row are taken by a player', ()=>{ 
        const field: GridItem[] = [{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "", isClicked: false},{value: "X", isClicked: true},{value: "", isClicked: false},{value: "O", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true}]
        let result:boolean = isGameOver(field);
        
        expect(result).toEqual(true);
    });

    it('should be game over when all fields in a collumn are taken by a player', ()=>{ 
        const field: GridItem[] = [{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "", isClicked: false},{value: "X", isClicked: true},{value: "X", isClicked: false},{value: "O", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true}]     
        let result:boolean = isGameOver(field);
            
        expect(result).toEqual(true);
    });

    it('should be game over when all fields in a diognale are taken by a player', ()=>{    
        const field: GridItem[] = [{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "", isClicked: false},{value: "X", isClicked: true},{value: "X", isClicked: false},{value: "O", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true}]     
        let result:boolean = isGameOver(field);        
            
        expect(result).toEqual(true);
    });

    it('should let players take turns taking fields until the game is over', ()=>{                
        const result=  changePlayer('O');        
        expect(result).toEqual('X');
    });

    it('should be - game is over when all fields are taken', ()=>{            
       const field: GridItem[] = [{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "O", isClicked: false},{value: "O", isClicked: true},{value: "O", isClicked: false},{value: "X", isClicked: true},{value: "O", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true}]     
       let result:boolean = isGameOver(field);

       
        expect(result).toEqual(true);
    });

    it('should have two players in the game (X and O)', ()=>{                
        const result: string[]= [];
        let activePlayer = 'O';
        for(let i=0; i<9; i++){
            result.push(activePlayer);
            activePlayer = changePlayer(activePlayer);
        }


        expect(result).toEqual(['O', 'X', 'O','X', 'O', 'X','O', 'X', 'O']);
    });

    it('game has nine fields in a 3x3 grid', ()=>{                
        const result=  grid.length;

        expect(result).toEqual(9);
    });

    it('a player can take a field if not already taken', ()=>{                
        const field: GridItem[] = [{value: "X", isClicked: true},{value: "X", isClicked: true},{value: "", isClicked: false},{value: "O", isClicked: true},{value: "O", isClicked: false},{value: "X", isClicked: true},{value: "O", isClicked: true},{value: "X", isClicked: true},{value: "X", isClicked: true}]

        const result =  setDisability(field, 1);

        expect(result).toEqual(true);
    });



    
})