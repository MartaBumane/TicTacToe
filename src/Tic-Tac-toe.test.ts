import App from './App'

// describe('TicTacToe',()=>{
//     const ticTacToe = new TicTacToe(['o', 'o', 'x','x', 'x', 'o','o', 'x', 'X']);      
    
//     it('should be game over when all fields in a row are taken by a player', ()=>{  
//         const result=  ticTacToe.isGameOver();
            
//         expect(result).toEqual(true);
//     });

//     it('should be game over when all fields in a collumn are taken by a player', ()=>{      
//         const result=  ticTacToe.isGameOver();
            
//         expect(result).toEqual(true);
//     });

//     it('should be game over when all fields in a diognale are taken by a player', ()=>{       
//         const result=  ticTacToe.isGameOver();
            
//         expect(result).toEqual(true);
//     });

//     it('should let players take turns taking fields until the game is over', ()=>{
//         const ticTacToe = new TicTacToe(['X', '', 'O','X', 'X', 'X','O', '', 'X']); 
//         ticTacToe.changePlayer();        
//         const result=  ticTacToe.activePlayer;
        
//         expect(result).toEqual('X');
//     });

//     it('should be - game is over when all fields are taken', ()=>{            
//         const result=  ticTacToe.isGameOver();
        
//         expect(result).toEqual(true);
//     });

//     it('should have two players in the game (X and O)', ()=>{                
//         const result=  ticTacToe.getGrid();

//         expect(result).toEqual(['O', 'O', 'X','X', 'X', 'O','O', 'X', 'X']);
//     });

//     it('game has nine fields in a 3x3 grid', ()=>{                
//         const result=  ticTacToe.gridInfo.length;

//         expect(result).toEqual(9);
//     });



    
// })