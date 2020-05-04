import {randomRange} from './HelperFunction';
export const miniMax = ()=>{


}
export const min =(game, depth)=>{
    if(depth === 0 /*|| game over */){
        return //will return here something
    }

}

export const max =(arrayOfMoves)=>{
    var max = 0;
    var MaxEle = null;
    
    for(let i=0;i<arrayOfMoves.length;i++){
        for(let j=0;j<arrayOfMoves[i].length;j++){
            if(arrayOfMoves[i][j].capturePoints > max){
                //console.log(arrayOfMoves[i][j], i,j )
                max = arrayOfMoves[i][j].capturePoints;
                MaxEle = arrayOfMoves[i][j];
            }
        }
    }
    // that is when any of the pieces are not attacking,
    // any of the black pieces so the max value will be the first element with capture value 0.
    //So we will move Randomly
    if(max === 0){
        let firstRandom = randomRange(0,arrayOfMoves.length-1);// for which type of piece
        let secondRandom = randomRange(0,arrayOfMoves[firstRandom].length-1);// for which move to play
        //console.log(firstRandom,secondRandom)
        MaxEle = arrayOfMoves[firstRandom][secondRandom];
    }
    //console.log(max,"Inside MAX" ,MaxEle)

    return MaxEle;
}