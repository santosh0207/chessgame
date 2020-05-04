import {checkMove} from '../ChessLogic';
import {checkRowDifference, populatePosArray} from '../HelperFunction'

export const King = (index, game)=>{
    let numRow = 8;
    let PosArray = [];
    let tempEle = game[index];
    tempEle.currentGameIndex = index;

    if(game[index+1] && (checkRowDifference(index+1,index)===0)){
        if(checkMove(index+1,index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index+1,_tempEle,game))); 
        }
    }
    if(game[index-1] && (checkRowDifference(index-1,index)===0)){
        if(checkMove(index-1,index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index-1,_tempEle,game))); 
        }
    }
    if(game[index+(numRow)]&& (checkRowDifference(index+(numRow),index)===1)){
        if(checkMove(index+(numRow),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index+(numRow),_tempEle,game))); 
        }
    }
    if(game[index+(numRow+1)]&& (checkRowDifference(index+(numRow+1),index)===1)){
        if(checkMove(index+(numRow+1),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index+(numRow+1),_tempEle,game))); 
        }
    }
    if(game[index+(numRow-1)]&& (checkRowDifference(index+(numRow-1),index)===1)){
        if(checkMove(index+(numRow-1),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index+(numRow-1),_tempEle,game))); 
        }
    }
    if(game[index-(numRow)]&& (checkRowDifference(index-(numRow),index)===1)){
        if(checkMove(index-(numRow),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index-(numRow),_tempEle,game))); 
        }
    }
    if(game[index-(numRow-1)]&& (checkRowDifference(index-(numRow-1),index)===1)){
        if(checkMove(index-(numRow-1),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index-(numRow-1),_tempEle,game))); 
        }
    }
    if(game[index-(numRow+1)]&& (checkRowDifference(index-(numRow+1),index)===1)){
        if(checkMove(index-(numRow+1),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            PosArray.push((populatePosArray(index-(numRow+1),_tempEle,game))); 
        }
    }

    return PosArray;
        
}