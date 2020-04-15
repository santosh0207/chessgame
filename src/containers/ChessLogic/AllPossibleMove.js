import {checkMove} from './ChessLogic';
import {randomRange} from './HelperFunction';
/** For checkmove to work properly, 
 * Please pass the target index as first parameter and current index as secon parameter 
 * This is beacuse the code it self convertes and check for white and black pieces for two player game. 
 * */
export const nextPossibleMoves = (ele, index, game)=>{
    let PosArray = [];
    let numRow = 8;
    let tempEle = ele;
    tempEle.currentGameIndex = index;
    console.log('**********************',index,'******************************************')
    switch(ele.name){
        case "pawn":
                if(index >= 55)// pawn reached to last row
                    break;
                //Pawn can move 2 blocks ahead at first time 
                if(ele.numMoves === 0){
                    if(checkMove(index+(2*numRow),index, game)) {
                        let _tempEle = Object.create(tempEle);//doing this because Objects Are refrence type so when we mutte the its the single copy which gets changed every time
                        _tempEle['nextMove'] = (index + (2*numRow));
                        PosArray.push(_tempEle); 
                        console.log('****************************************************************')
                    } 
                }
                // Pawn to move only 1 block ahead
                if(checkMove(index+(numRow),index, game)) {
                    let _tempEle = Object.create(tempEle);
                    _tempEle['nextMove'] = index + (numRow);
                    PosArray.push(_tempEle);
                }    
                //if there is a enemy piece left side --- to Kill
                if(checkMove(index + (numRow-1),index, game)){
                    let _tempEle = Object.create(tempEle);
                    _tempEle['nextMove'] = index + (numRow-1);
                    PosArray.push(_tempEle);
                }                
                //if there is a enemy piece right side --- to Kill
                if(checkMove(index + (numRow+1),index, game)){
                    let _tempEle = Object.create(tempEle);
                    _tempEle['nextMove'] = index + (numRow+1);
                    PosArray.push(_tempEle);
                }
                if(PosArray.length > 0)
                    return PosArray;
                else
                    break;
        default :
            return null;
        
    }
}
