import React, { Component } from 'react'
import {Data as gridData, saveData} from '../ChessLogic/Data';
import {checkMove, createFactory, gridFactory} from '../ChessLogic/ChessLogic';
import {playAI} from '../ChessLogic/ChessAI'
import {isPawnReachesLastRow} from '../ChessLogic/EventCheck';
import GameOverScreen from '../../components/GameOverScreen/GameOver';
import Model  from '../../components/UI/Model/Model';
import Grid from '../../components/Chess/Grid/Grid';
import classes from './chessBuilder.module.css';

export default class ChessBuilder extends Component {
    state = {
        pieces:[],
        moveTurn:'white',
        blackDeadPieces:[],
        whiteDeadPieces:[]
    }
    currEleIndex = null;
    onDragStartHandler = (event,index)=>{
        console.log("Ondrag start handler", index); 
        this.currEleIndex = index;
    }

    onDragStopHandler = (event,index)=>{
        //console.log("Ondrag stop handler");
        event.preventDefault();
    }

    onDropHandler = (event,index)=>{
        //console.log(this.currEleIndex,"Ondrag Drop handler", index);

        if(this.state.moveTurn !== this.state.pieces[this.currEleIndex]['color']){
            alert("Not Your Piece");
            return;
        }
        
        if(checkMove(index, this.currEleIndex, this.state.pieces)){
            this.executeTheMove(this.currEleIndex, index);
        
        /****************AI CODE STARTS HERE *********************** */
            setTimeout(()=>{
                let newPiece = playAI(this.state);
                this.executeTheMove(newPiece.currentGameIndex,newPiece.nextMove);
            },500);
        /***************AI Code Ends Here*************************** */  

        }else{
            alert("Not Valid Move");
        }
        
    }

    gameStart =()=>{
        console.log(window.$gameObject_allMove,"Inside gameStart")
        // setTimeout(()=>{
        //     let newPiece = playAI(this.state);
        //     if(newPiece){
        //         if(!isPawnReachesLastRow(newPiece)){
        //             this.executeTheMove(newPiece.currentGameIndex,newPiece.nextMove,null);
        //         }else{
        //             this.executeTheMove(newPiece.currentGameIndex,newPiece.nextMove,true);
        //         }
        //         setTimeout(this.gameStart, 200);
        //     }
        // },200);
    }

    executeTheMove =(currIndex, nextIndex, isPawnReached)=>{
        //console.log(nextIndex,"inside executeTheMove",currIndex)

        let game = [...this.state.pieces];

        if(game[nextIndex].value !== ''){
            game[nextIndex].isAlive = false;
        }
        let tempArr = [];
        if(game[nextIndex].color ==='white'){
            tempArr.push(JSON.parse(JSON.stringify(game[nextIndex])));//deep copying of object
        }
        let tempArr1 = [];
        if(game[nextIndex].color ==="black"){
            tempArr1.push(JSON.parse(JSON.stringify(game[nextIndex])));//deep copying of object
        }
        //console.log(game[nextIndex].color,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$",tempArr,tempArr1)
        
        game[nextIndex] = game[currIndex];
        game[nextIndex].numMoves++;
        game[currIndex] = {
            "value": "",
            "color": "none",
            "points":0
        }

        let currMoveTurn="";
        let QueenValue = '';
        if(this.state.moveTurn === 'black'){
            QueenValue = '&#9819;'
            currMoveTurn="white";
        }else{
            currMoveTurn="black";
            QueenValue = '&#9813;'
        }
        //if Pawn Reached to last row
        if(isPawnReached){
            game[nextIndex] = gridFactory(this.state.moveTurn,QueenValue);
        }
        //Saving in global Object
        saveData(game,currMoveTurn);
        
        this.setState({
            pieces:game,
            moveTurn:currMoveTurn,
            blackDeadPieces:[...this.state.blackDeadPieces, ...tempArr1],
            whiteDeadPieces:[...this.state.whiteDeadPieces, ...tempArr]
        })

    }

    componentDidMount(){
        console.log("inside component did mount");
        let tempArray = createFactory(gridData());
        this.setState({pieces:tempArray});
    }

    render() {
        let kingCounter = 0;
        let kingIndex = 0;
        let mapValue = this.state.pieces.map((el,index)=>{
            if(this.state.pieces[index]['name']==="king"){
                kingCounter++;
                kingIndex = index;
            }
            return (
                 <Grid key ={index}
                    indexValue={index} 
                    gridvalue={this.state.pieces[index]['value']}
                    dragstart ={(event)=>this.onDragStartHandler(event, index)}
                    dragstop ={(event)=>this.onDragStopHandler(event, index)}
                    dragdrop ={(event)=>this.onDropHandler(event, index)}
                /> 
            )
        });

        let gValue = [];
        for(let i=0;i<mapValue.length;i++){
            var tempArr=[];
            for(let j=i;j<i+8;j++){
                tempArr.push(mapValue[j]);
            }
            i+=7;
            gValue.push(<div className={classes.DivAlign} key={i}>{tempArr}</div>);
        }

        /**  dead Pieces render */
        let deadPiecesWhite = [];
        for(let i=0;i<this.state.whiteDeadPieces.length;i++){
            deadPiecesWhite.push(
                <li key={i}>
                    <Grid key = {i}
                        isDeadEle ={true}
                        gridvalue={this.state.whiteDeadPieces[i]['value']}  
                    />
                </li> 
            )
        }
        /**  dead Pieces render */
        let deadPiecesBlack = [];
        for(let i=0;i<this.state.blackDeadPieces.length;i++){
            deadPiecesBlack.push(
                <li key={i}>
                    <Grid key = {i}
                        isDeadEle ={true}
                        gridvalue={this.state.blackDeadPieces[i]['value']}  
                    />
                </li> 
            )
        } 

        //console.log(this.state.whiteDeadPieces,"deead piece white",deadPiecesWhite)
        //console.log(this.state.blackDeadPieces,"deead piece Black",deadPiecesBlack)
        let winner = null;
        if(kingCounter < 2){
            //console.log(this.state.pieces , kingIndex)
            if(this.state.pieces.length>0){
                winner = this.state.pieces[kingIndex].color;
                window.$gameObject_allMove = winner;
            }
        }
        //console.log(winner)
        return (
            <div className={classes.Container} >
                <div className={classes.whiteDiv}>
                   <div className={classes.Title} onClick={this.gameStart}>White Pieces</div>
                    <div className={classes.listContainer}>
                        <ul>
                            {deadPiecesWhite}
                        </ul>
                    </div>    
                </div>
                  
                <div className={classes.GridContainer}>{gValue}</div>

                <div className ={classes.BlackDiv}>
                    <div className={classes.Title}>Black Pieces</div>
                    <div className={classes.listContainer}>
                        <ul>
                            {deadPiecesBlack}
                        </ul>
                    </div>   
                </div>
                {
                    (kingCounter<2)?
                        <Model show={true} modelClosed ={()=>{console.log("Inside model")}} >
                            <GameOverScreen win={winner}></GameOverScreen>
                        </Model>
                    :null

                }
            
            </div>
        )
    }
}
