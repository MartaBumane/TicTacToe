import React, {useState} from 'react';
import './App.css';



interface GridItem {
  value: string;
  isClicked : boolean; 
  index: number;
}

let grid: GridItem[]=[];
for(let i = 1;i<=9;i++){
  grid.push({value: '', isClicked: false, index: i});
}

let activePlayer = 'O';

function doesPlayerOwnsRow():boolean{    
      let row: string[] = [];
      for(let i = 0; i<9;i+=3){
          for(let j = 0; j<3; j++){
              row.push(grid[i+j].value);
          }

          if(row.every( v => v === row[0])){
              if(row[0]!==""){
                  return true;
              }
          }else{
              row = [];
          }  
      }
      return false;      
  }        
  
 function doesPlayerOwnsCollumn():boolean{
      let coll: string[] = [];
      for(let i = 0; i<3;i++){
          coll.push(grid[i].value);
          coll.push(grid[i+3].value);
          coll.push(grid[i+6].value);
          if(coll.every( v => v === coll[0])){                
              if(coll[0]!==""){
                  return true;
              }
          }else{
              coll = [];
          }  
      }
      return false;      
  }   
  
  function doesPlayerOwnsDiognale():boolean{
      let diognaleLeft: string[] = [grid[0].value, grid[4].value, grid[8].value];
      let diognaleRight: string[] = [grid[2].value, grid[4].value, grid[6].value];
      
      if(diognaleLeft.every( v => v === diognaleLeft[0])){
          if(diognaleLeft[0]!==""){
              return true;
          }
      }else if(diognaleRight.every( v => v === diognaleRight[0])){
          if(diognaleRight[0]!==""){
              return true;
          }
      }

      return false;
  }

  function isGameOver(): boolean{
      if(doesPlayerOwnsRow()||doesPlayerOwnsCollumn()||doesPlayerOwnsDiognale()){ 
          return true;
      }

      
      return false;
  }


function changePlayer(){
  activePlayer = activePlayer === 'O'? 'X':'O';
}

const App: React.FC = () => {

  const [field, setField] = useState<GridItem[]>(grid);  

  function buttonClass(j: number): string{
    if(field[j].isClicked){
      changePlayer();
      return activePlayer;
    }else{
      return 'button';

    }
  }

  function changeStatus(j: number): void{
    field[j].isClicked= true;
    setField([...field]);
    
  }

  function createTable() {
    let table = []

    for (let i = 0; i < 9; i+=3) {
      let children = []

      for (let j = i; j < i+3;j++) {
        children.push(<td className="grid" ><button onClick={() => changeStatus(j)} className={buttonClass(j)}></button></td>)
      }
      table.push(<tr>{children}</tr>);
    }
    return table;
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Tic Tac Toe</h1>
      <table >
        <tbody>   
          {createTable()}

        </tbody>
      </table>
      </header>
    </div>
  );
}

export default App;
