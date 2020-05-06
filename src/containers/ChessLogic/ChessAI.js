import {nextPossibleMoves} from './AllPossibleMove'
import {max} from './MiniMax';
import {boardEvaluator} from './BoardEvaluator';
import { threatToTheKing } from './EventCheck';

let gameObjectOfAllMoves = [];
let gameMovesUptoThreeMoves = [];
let iterationCounter = 0;

let boardPieceDepth = 4;

export const playAI = (game)=>{ 
   //console.log("inside PlayAI");
   gameObjectOfAllMoves = [];

  //return allPossibleValidMove(game);
  return checkMaxPossibleMove(game, game.moveTurn);
}
const checkMaxPossibleMove = (game, currPlayer)=>{
    //console.log("##################################################",game.pieces);

    let PossibleMoveArray = [];//finding all black pieces first

    for(let i=0; i<game.pieces.length; i++){
        if(game.pieces[i].color===currPlayer){
            let temp = nextPossibleMoves(i, game.pieces, currPlayer);
            if(temp !=null && temp.length>0)
                PossibleMoveArray.push(temp);
        }
    }

    if(threatToTheKing(game))
        window.$gameObject_allMove.kingOnCheck = true;
    else
        window.$gameObject_allMove.kingOnCheck = true;

    var _newGameInstance = [...game.pieces];
    //console.log("##################################################",_newGameInstance);

    for(let i=0;i<PossibleMoveArray.length;i++){
        for(let j=0;j<PossibleMoveArray[i].length;j++){
            let piece = PossibleMoveArray[i][j];
            //console.log("########################",piece,"##########################");
            //write checkomhg here for king threat
            if(window.$gameObject_allMove.kingOnCheck){
                if(!checkMoveToAvoidThreat(piece,_newGameInstance));
                    initiateRecusion(piece,_newGameInstance)
            }else{
                initiateRecusion(piece,_newGameInstance)
            }

        }
    }


    //console.log(gameObjectOfAllMoves.length,"*******************", gameObjectOfAllMoves)
    var indexOfElement = boardEvaluator(gameObjectOfAllMoves,boardPieceDepth,currPlayer);
    //console.log(indexOfElement,"indexOfElement")
    return gameObjectOfAllMoves[indexOfElement].piece;//this will return the element
}

const checkMoveToAvoidThreat =(piece, gameBoard)=>{
    //console.log("inisde check Move to acoid threat")
    let _newGameInstance1 = [...gameBoard];
    let currIndex = piece.currentGameIndex;
    let nextIndex = piece.nextMove;
    if(_newGameInstance1[nextIndex].value !== ''){
        _newGameInstance1[nextIndex].isAlive = false;
    }
    _newGameInstance1[nextIndex] = JSON.parse(JSON.stringify(piece));
    _newGameInstance1[nextIndex].numMoves++;
    _newGameInstance1[currIndex] = {
        "value": "",
        "color": "none",
        "points":0
    }

    if(threatToTheKing(_newGameInstance1))
        return true;
    else
        return false;
}

const ObjectFactoryMoves = (piece,game1) =>{
    var obj = {};
    obj.piece = piece;
    obj.game = game1;
    return obj
}
const initiateRecusion = (piece,_newGameInstance) =>{
    gameMovesUptoThreeMoves = [];
    recursionFunction(piece,_newGameInstance);

    let obj ={
        piece : piece,
        movesUptoThree: gameMovesUptoThreeMoves
    }
    gameObjectOfAllMoves.push(obj);
}
const recursionFunction = (piece,_newGameInstance) =>{
    //console.log(piece, "inside [recursionFunction] ")
    let _newGameInstance1 = [..._newGameInstance];
    let currIndex = piece.currentGameIndex;
    let nextIndex = piece.nextMove;
    if(_newGameInstance1[nextIndex].value !== ''){
        _newGameInstance1[nextIndex].isAlive = false;
    }
    _newGameInstance1[nextIndex] = JSON.parse(JSON.stringify(piece));
    _newGameInstance1[nextIndex].numMoves++;
    _newGameInstance1[currIndex] = {
        "value": "",
        "color": "none",
        "points":0
    }
    iterationCounter++;
    let gamefirstMove = ObjectFactoryMoves(piece,_newGameInstance1);
    gameMovesUptoThreeMoves.push(gamefirstMove);

    if(iterationCounter < boardPieceDepth){
        predictNextFourMove(_newGameInstance1, gamefirstMove);
    }else{
        iterationCounter = 0;
    }
}


const predictNextFourMove = (game, obj) =>{
    //console.log("inside [predictNextFourMove] ",obj.piece.color)

    let currPlayer;

    if(obj.piece.color === 'white')
        currPlayer = 'black';
    else
        currPlayer = 'white';
    
    let piece = allPossibleValidMove(game,currPlayer);
    if(piece == null)
        return;

    recursionFunction(piece,game);
}
export const allPossibleValidMove = (game,currPlayer) =>{ 
    //console.log("inside [allPossibleValidMove] ")

    let PossibleMoveArray = [];//finding all black pieces first
    for(let i=0; i<game.length; i++){
        if(game[i].color===currPlayer){
            PossibleMoveArray.push(nextPossibleMoves(i, game, currPlayer));
        }
    }
    //Remove All Null from the Array i.e. black piece whose movement is not possible according to rule 
    PossibleMoveArray = PossibleMoveArray.filter((el)=>{
        if(el !=null && el.length>0)
            return el;
    });

    if(PossibleMoveArray.length ===0){
        console.log("Game Draw");
        return null;
    }else{

        //Taking the pawn with max hiting capability    
        var ele = max(PossibleMoveArray);//PossibleMoveArray[2][0];this will return an object 
        
        /**  Instead of this the min-max logic will appear to choose the best move 
         * 1. if it kills the king
         * 2. if pawn reaches to end row
         * 4.
        */   
    
        return ele;
    }
}
