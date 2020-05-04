import {checkMove} from '../ChessLogic';
import {populatePosArray} from '../HelperFunction'

export const Pawn =(index, game, currPlayer)=>{
    //console.log("*************************",currPlayer," Pawn ***********************")
    if(currPlayer==="black"){
        return blackPlayerPawn(index, game);
    }else{
        return whitePlayerPawn(index,game);
    }

}

const blackPlayerPawn = (index,game) =>{
    
    let numRow = 8;
    let PosArray = [];
    let tempEle = game[index];
    tempEle.currentGameIndex = index;

    if(index >= 55){// pawn reached to last row
        //alert(" Black Pawn Reached to last Row");
        let _tempEle = JSON.parse(JSON.stringify(tempEle));
        _tempEle['nextMove'] = index;
        _tempEle.capturePoints = 50;
        PosArray.push(_tempEle);
    }
    // Pawn to move only 1 block ahead

    if(index+(numRow-1)<game.length){
        if(checkMove(index+(numRow),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            _tempEle['nextMove'] = index + (numRow);
            PosArray.push(_tempEle);
    
            //Pawn can move 2 blocks ahead at first time 
            if(game[index].numMoves === 0){
                if(checkMove(index+(2*numRow),index, game)) {
                    if(game[(index+(2*numRow))].value===''){
                        let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                        _tempEle['nextMove'] = (index + (2*numRow));
                        PosArray.push(_tempEle); 
                        //console.log('****************************************************************')
                    }
                } 
            }
        } 
    }
                      
    //if there is a enemy piece left side --- to Kill
    if(index+(numRow-1)<game.length){
        if(checkMove(index + (numRow-1),index, game)){
            PosArray.push((populatePosArray(index+(numRow-1),tempEle,game))); 
        } 
    }
               
    //if there is a enemy piece right side --- to Kill
    if(index+(numRow+1)<game.length){
        if(checkMove(index + (numRow+1),index, game)){
            PosArray.push((populatePosArray(index+(numRow+1),tempEle,game))); 
        }
    }


    return PosArray;
}



const whitePlayerPawn = (index, game) =>{
    
    let numRow = 8;
    let PosArray = [];
    let tempEle = game[index];
    tempEle.currentGameIndex = index;

    if(index <= 7){// pawn reached to last row
        //alert(" white Pawn Reached to last Row");
        let _tempEle = JSON.parse(JSON.stringify(tempEle));
        _tempEle['nextMove'] = index;
        _tempEle.capturePoints = 50;
        PosArray.push(_tempEle);
    }
    // Pawn to move only 1 block ahead
    if(index-(numRow)>=0){
        if(checkMove(index-(numRow),index, game)) {
            let _tempEle = JSON.parse(JSON.stringify(tempEle));
            _tempEle['nextMove'] = index - (numRow);
            PosArray.push(_tempEle);
    
            //Pawn can move 2 blocks ahead at first time 
            if(game[index].numMoves === 0){
                if(game[(index-(2*numRow))].value===''){
                    if(checkMove(index-(2*numRow),index, game)) {
                        let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                        _tempEle['nextMove'] = (index - (2*numRow));
                        PosArray.push(_tempEle); 
                    } 
                }
            }
        } 
    }
                     
    //if there is a enemy piece left side --- to Kill
    if(index-(numRow-1)>=0){
        if(checkMove(index - (numRow-1),index, game)){
            PosArray.push((populatePosArray(index-(numRow-1),tempEle,game))); 
        } 
    }
                   
    //if there is a enemy piece right side --- to Kill
    if(index-(numRow+1)>=0){
        if(checkMove(index - (numRow+1),index, game)){
            PosArray.push((populatePosArray(index-(numRow+1),tempEle,game))); 
        }
    }
    //console.log("inside whitePlayerPawn", PosArray);
    return PosArray
}