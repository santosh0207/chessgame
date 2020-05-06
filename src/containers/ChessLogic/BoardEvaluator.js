export const boardEvaluator = (gameBoard, boardPieceDepth,currPlayer)=>{
    console.log("Inside Board Evaluator");   
    let allSameMoveArray = [];
    let tempValueHolderArr =[]
    for(let i=0;i<gameBoard.length;i++){
        if(gameBoard[i]!==null){
            if(gameBoard[i]["movesUptoThree"].length>0){ 
                let boardValue = calculateBoard(gameBoard[i]["movesUptoThree"][gameBoard[i]["movesUptoThree"].length-1].game, currPlayer);
                tempValueHolderArr.push(boardValue);
            }else{
                tempValueHolderArr.push(-Infinity);
            }
        }
    }
    let max = -Infinity;
    for(let i=0;i<tempValueHolderArr.length;i++){
        if(tempValueHolderArr[i]>max){
            max = tempValueHolderArr[i];
        }
        if(tempValueHolderArr[i]===max)
            allSameMoveArray.push(i)//contains all the index having the same board value as max
    }

    let maxIndex = tempValueHolderArr.indexOf(Math.max(...tempValueHolderArr));

    if(gameBoard[maxIndex]!==null){
        if(gameBoard[maxIndex]["movesUptoThree"].length>0){ 
            let check = checkMoveRepeatition(gameBoard[maxIndex]["movesUptoThree"][boardPieceDepth-1].game)//game board of max value of index 
            console.log(check,"repettion check")
            if(check){
                gameBoard[maxIndex] = null;
                boardEvaluator(gameBoard,boardPieceDepth,currPlayer);
            }
        }
    }else{
        boardEvaluator(gameBoard,boardPieceDepth,currPlayer);
    }
   

    return maxIndex;

}

const checkMoveRepeatition =(gameBoard)=>{
    let allMoves = window.$gameObject_allMove.game;// this will return an array
    let currPlayer = window.$gameObject_allMove.currentPlayer;
    let currentIterationCounter = 0;
    
    while(  currentIterationCounter < 4){
        let currRefIndex = 2;
        let gameRef = allMoves[allMoves.length-currRefIndex ];

        if(gameRef!==undefined){
            for(var i=0;i<gameRef.length;i++){
                for(var j=0;j<gameBoard.length;j++){
                    if(gameRef[i].color === currPlayer && gameRef[i].color === gameBoard[j].color){
                        if(gameRef[i].currentGameIndex !== gameBoard[j].currentGameIndex )
                            break;
                    }
                }
                if(j!== gameBoard.length)
                    break;
            }
            if(i===gameRef.length){
                currRefIndex = currRefIndex+2;
                currentIterationCounter ++;
            }else{
                break;
            }
        }else{
            break;
        }
        
        
    }
    
    if(currentIterationCounter === 4)
        return true;

    return false;
}
const calculateBoard = (game,currPlayer) =>{
    let sum = 0;
    for(var i=0;i<game.length;i++){
        let el = game[i];
        if(el.color !== ''){
            if(el.color !== currPlayer)
                sum +=  -(el.points);
            else
                sum+=el.points;
        }
    }

    return sum;
}