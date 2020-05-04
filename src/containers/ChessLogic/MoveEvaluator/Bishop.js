import {checkRowDifference, populatePosArray} from '../HelperFunction';

var currPieceColor = '';
var breakBool = false;

export const Bishop = (index,game) =>{
    let numRow = 8;
    let PosArray = [];
    let tempEle = game[index];
    tempEle.currentGameIndex = index;

    //fetching all possible moves in "left" diagonal index "less" than given index
    currPieceColor =  game[index].color;
    let itrationCounter = 1;
    while(index >= 0){

        let checkIndex = index-(itrationCounter*numRow-itrationCounter);
        if((checkIndex >=0) && checkRowDifference(index,checkIndex)===(itrationCounter)){
            constantFunction(game,checkIndex,tempEle,PosArray);
            if(breakBool)
                break; 
        }else{
            break;
        }

        itrationCounter++;
    }
    //fetching all possible moves in "right" diagonal index "less" than given index
    breakBool = false;
    itrationCounter = 1;
    while(index >= 0){

        let checkIndex = index-(itrationCounter*numRow+itrationCounter);
        if((checkIndex >=0) && checkRowDifference(index,checkIndex)===(itrationCounter)){
            constantFunction(game,checkIndex,tempEle,PosArray);
            if(breakBool)
                break; 
        }else{
            break;
        }

        itrationCounter++;
    }
    //fetching all possible moves in "left" diagonal index "greater" than given index
    breakBool = false;
    itrationCounter = 1;
    while(index <= game.length-1){

        let checkIndex = index+(itrationCounter*numRow-itrationCounter);
        if((checkIndex <= game.length-1) && checkRowDifference(index,checkIndex)===(itrationCounter)){
            constantFunction(game,checkIndex,tempEle,PosArray);
            if(breakBool)
                break; 
        }else{
            break;
        }

        itrationCounter++;
    }
    //fetching all possible moves in "right" diagonal index "greater" than given index
    breakBool = false;
    itrationCounter = 1;
    while(index <= game.length-1){

        let checkIndex = index+(itrationCounter*numRow+itrationCounter);
        if((checkIndex <=game.length-1) && checkRowDifference(index,checkIndex)===(itrationCounter)){
            constantFunction(game,checkIndex,tempEle,PosArray);
            if(breakBool)
                break; 
        }else{
            break;
        }

        itrationCounter++;
    }
    //console.log("bishop ",PosArray)
    return PosArray;
}


const constantFunction = (game,i,tempEle,PosArray)=>{
    //console.log("[Constant Finction] ", i, game )
    if(game[i].color === "none"){
        PosArray.push((populatePosArray(i,tempEle,game)));
    }else{
        if(game[i].color !== currPieceColor){// if the other side piece is found
            PosArray.push((populatePosArray(i,tempEle,game))); 
            breakBool = true;
        }else{
            breakBool = true;
        }
    }
}