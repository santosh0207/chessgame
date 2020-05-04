import { Knight } from './MoveEvaluator/Knight';
import { Pawn } from './MoveEvaluator/Pawn';
import { King } from './MoveEvaluator/King';
import { Rook } from './MoveEvaluator/Rook';
import { Bishop } from './MoveEvaluator/Bishop';

/** For checkmove to work properly, 
 * Please pass the target index as first parameter and current index as secon parameter 
 * This is beacuse the code it self convertes and check for white and black pieces for two player game. 
 * */
export const nextPossibleMoves = (index, game ,currPlayer)=>{
    //console.log('**********************',index,'******************************************')
    let arr=[];
    switch( game[index].name){
        case "pawn":
                arr = [...Pawn(index,game,currPlayer)];
                if(arr.length > 0)
                    return arr;
                else
                    break;
        case "knight":
                arr = [...Knight(index,game)];
                if(arr.length > 0)
                    return arr;
                else
                    break;
        case "king":
                arr = [...King(index,game)];
                if(arr.length > 0)
                    return arr;
                else
                    break;
        case "rook":
                arr = [...Rook(index,game)];
                if(arr.length > 0)
                    return arr;
                else
                    break;
        case "bishop":
                arr = [...Bishop(index,game)];
                if(arr.length > 0)
                    return arr;
                else
                    break;
        case "queen":
                //console.log("**********  INSIDE QUEEN ********");
                arr = [...Rook(index,game),...Bishop(index,game)];
                if(arr.length > 0)
                    return arr;
                else
                    break;
        default :
            return null;
        
    }
}
