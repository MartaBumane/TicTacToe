import {GridItem} from "./interface"

export let grid: GridItem[]=[];
if(grid.length<1){
  for(let i = 1;i<=9;i++){
    grid.push({value: '', isClicked: false});
  }
}

function doesPlayerOwnsRow(field:GridItem[]):boolean{    
    let row: string[] = [];
    for(let i = 0; i<9;i+=3){
        for(let j = 0; j<3; j++){
            row.push(field[i+j].value);
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

function doesPlayerOwnsCollumn(field:GridItem[]):boolean{
    let coll: string[] = [];
    for(let i = 0; i<3;i++){
        coll.push(field[i].value);
        coll.push(field[i+3].value);
        coll.push(field[i+6].value);
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

function doesPlayerOwnsDiognale(field: GridItem[]):boolean{
    let diognaleLeft: string[] = [field[0].value, field[4].value, field[8].value];
    let diognaleRight: string[] = [field[2].value, field[4].value, field[6].value];
    
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

export function isGameOver(field:GridItem[]): any{
    if(doesPlayerOwnsRow(field)){
        return 'Player owns row';
    }else if(doesPlayerOwnsCollumn(field)){
        return 'Player owns column';
    }else if(doesPlayerOwnsDiognale(field)){ 
        return 'Player owns diognale';
    }

    if(field.every( v => v.value !== '')){
      return 'Game Over, try again!';
    }
    
    return false;
}

export function setDisability(field:GridItem[], j:number){
    if(field[j].isClicked)  
    {
      return true;
    }else{
      return false;
    }
  }

export function changePlayer(activePlayer: string){
    if(activePlayer === 'O'){
        return 'X'
    }else{
        return 'O'
    }
}