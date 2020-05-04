import {populatePosArray,lastIndexRow,lastIndexCol,firstIndexRow,firstIndexCol} from '../HelperFunction';
import {checkMove} from '../ChessLogic';

var currPieceColor = '';
var breakBool = false;

export const Rook = (index, game)=>{
    let numRow = 8;
    let PosArray = [];
    let tempEle = game[index];
    tempEle.currentGameIndex = index;

    //console.log(index,"Inisde rook")
    //given index to row wise movement towards start of row
    let startIndex = firstIndexRow(index);
    currPieceColor =  game[index].color;
    for(let i = index-1; i>= startIndex ; i--){
        let checkk = checkMove(i,index,game);
        if(checkk){//aded this check;
            let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
            PosArray.push((populatePosArray(i,_tempEle,game)));
        }
    }
    //given index to row wise movement towards end of row
    let endIndex = lastIndexRow(index);
    breakBool = false;
    for(let i = index+1; i<= endIndex ; i++){
        let checkk = checkMove(i,index,game);
        if(checkk){//aded this check;
            let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
            PosArray.push((populatePosArray(i,_tempEle,game)));
        }
    }
    //given index to row wise movement towards start of coloumn
    let startIndexCol = firstIndexCol(index);
    breakBool = false;
    for( let i = index-numRow; i>=startIndexCol ; i=i-numRow){
        let checkk = checkMove(i,index,game);
        if(checkk){//aded this check;            
            let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
            PosArray.push((populatePosArray(i,_tempEle,game)));
        }
    }
    //given index to row wise movement towards end of coloumn
    let endIndexCol = lastIndexCol(index);
    breakBool = false;
    for(let i = index+numRow; i<= endIndexCol ; i=i+numRow){
        let checkk = checkMove(i,index,game);
        if(checkk){//aded this check;
            let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
            PosArray.push((populatePosArray(i,_tempEle,game)));
        }
    }
    //console.log(PosArray,'rook posArrr');
    return PosArray;
}

const constantFunction = (game,i,tempEle,PosArray)=>{
    //console.log("[constant function ROOK]" , game[i].color , currPieceColor,i)
    if(game[i].color === "none"){
        let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
        PosArray.push((populatePosArray(i,_tempEle,game)));
    }else{
        if(game[i].color !== currPieceColor){// if the other side piece is found
            let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
            PosArray.push((populatePosArray(i,_tempEle,game))); 
            breakBool = true;
        }else{
            breakBool = true;
        }
    }
}