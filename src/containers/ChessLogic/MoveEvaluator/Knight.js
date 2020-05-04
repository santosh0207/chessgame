import {checkMove} from '../ChessLogic';
import {checkRowDifference, populatePosArray} from '../HelperFunction'

export const Knight =(index, game)=>{
        let numRow = 8;
        let PosArray = [];
        let tempEle = game[index];
        tempEle.currentGameIndex = index;
        /**  for one row behind */
        if(checkRowDifference(index-(numRow-2),index) === 1 && ((index-(numRow-2))>=0)){
            /**one row behind left move */
            if(checkMove(index-(numRow-2),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index-(numRow-2),_tempEle,game)));  
            } 
        }

        if(checkRowDifference(index-(numRow+2),index) === 1 && ((index-(numRow+2))>=0)){
            /**one row behind right move */
            if(checkMove(index-(numRow+2),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index-(numRow+2),_tempEle,game))); 
            }      
        }
        
        /**  for one row ahead */
        if(checkRowDifference(index+(numRow-2),index) === 1 && ((index+(numRow-2)) <= game.length-1)){
                /**one row ahead left move */
                if(checkMove(index+(numRow-2),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index+(numRow-2),_tempEle,game))); 
            } 
        }                                  
        if(checkRowDifference(index+(numRow+2),index) === 1 && ((index+(numRow+2)) <= game.length-1)){
                /**one row ahead right move */
                if(checkMove(index+(numRow+2),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index+(numRow+2),_tempEle,game))); 
            } 
        }


        /** for two row behind */
        if(checkRowDifference(index-(2*numRow-1),index) === 2 && ((index-(2*numRow-1))>=0)){
            /**one row behind left move */
            if(checkMove(index-(2*numRow-1),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index-(2*numRow-1),_tempEle,game)));  
            } 
        }

        if(checkRowDifference(index-(2*numRow+1),index) === 2 && ((index-(2*numRow+1))>=0)){
            /**one row behind left move */
            if(checkMove(index-(2*numRow+1),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index-(2*numRow+1),_tempEle,game))); 
            }      
        }
        
        /**  for one row ahead */
        if(checkRowDifference(index+(2*numRow-1),index) === 2 && ((index+(2*numRow-1)) <= game.length-1)){
                /**one row ahead left move */
                if(checkMove(index+(2*numRow-1),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index+(2*numRow-1),_tempEle,game))); 
            } 
        }                                  
        if(checkRowDifference(index+(2*numRow+1),index) === 2 && ((index+(2*numRow+1)) <= game.length-1)){
                /**one row ahead right move */
                if(checkMove(index+(2*numRow+1),index, game)) {
                let _tempEle = JSON.parse(JSON.stringify(tempEle));//doing this is called deep copying, because Objects Are refrence type so when we mutate the its the single copy which gets changed every time
                PosArray.push((populatePosArray(index+(2*numRow+1),_tempEle,game))); 
            } 
        }
     
        return PosArray;
}