import {nextPossibleMoves} from './AllPossibleMove'

export const playAI = (game)=>{ 
    console.log("inside PlayAI");
   return allPossibleValidMove(game);
}

export const allPossibleValidMove = (game) =>{ 
   
    let PossibleMoveArray = [];//finding all black pieces first
    for(let i=0; i<game.length; i++){
        if(game[i].color==='black'){
            PossibleMoveArray.push(nextPossibleMoves(game[i], i, game));
        }
    }

    //Remove All Null from the Array i.e. black piece whose movement is not possible according to rule 
    PossibleMoveArray = PossibleMoveArray.filter((el)=>{
        if(el !=null && el.length>0)
            return el;
    })
    console.log(PossibleMoveArray,"possible Move Array");
    var ele = PossibleMoveArray[2][0];//this will return an object 
    /**  Instead of this the min-max logic will appear to choose the best move 
     * 1. if it kills the king
     * 2. if pawn reaches to end row
     * 3. move with highest kill value
     * 4.
    */
    

    console.log(ele ,"ele");
    
    let currIndex = ele.currentGameIndex;
    let nextIndex = ele.nextMove;

    if(game[nextIndex].value !== ''){
        game[nextIndex].isAlive = false;
    }

    game[nextIndex] = game[currIndex];
    game[nextIndex].numMoves++;
    game[currIndex] = {
        "value": "",
        "color": "none"
    }

    return game;
}


