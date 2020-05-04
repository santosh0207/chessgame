import {nextPossibleMoves} from './AllPossibleMove'

export const CheckGameOver = () =>{
    let kingCounter = 0;
    let game = window.$gameObject_allMove.game[window.$gameObject_allMove.game.length-1];
    for(let i =0 ;i<game.length;i++){
        if(game[i].name==='king')
            kingCounter++;
    }
    if(kingCounter < 2){
        let winner =''
        if(game.length/2===0){
            winner='Black'
        }else{
            winner = 'white'
        }
        alert('Game Over !!!! Winner is '+winner);
        return true;
    }

    return false;
}

export const threatToTheKing = (game) =>{

    let currentPlayer = window.$gameObject_allMove.currentPlayer;

    // if(currentPlayer === 'black')
    //     currentPlayer = 'white';
    // else
    //     currentPlayer = 'black';


    let PossibleMoveArrayforEnemy = [];//finding all possible moves of other player so that we can find out if our king is in check
    for(let i=0; i<game.length; i++){
        if(game[i].color===currentPlayer){
            let temp = nextPossibleMoves(i, game, currentPlayer);
            if(temp !=null && temp.length > 0)
                PossibleMoveArrayforEnemy.push(temp);
        }
    }
    
    let isKingOnThreat = false;
    for(let i=0;i< PossibleMoveArrayforEnemy.length;i++){
        for(let j=0;j<PossibleMoveArrayforEnemy[i].length;j++){
            if(game[PossibleMoveArrayforEnemy[i][j].nextMove].name ==='king' ){
                isKingOnThreat = true;
                break;
            }
        }
        if(isKingOnThreat)
            break;
    }

    //console.log(isKingOnThreat ,"Threter to the king", currentPlayer)

    if(isKingOnThreat)
        return true;
    
    return false;

}

export const isPawnReachesLastRow = (ele)=>{

}