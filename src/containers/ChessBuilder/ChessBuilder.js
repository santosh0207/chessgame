import React, { Component } from 'react'
import {Data as gridData} from '../ChessLogic/Data';
import {checkMove, createFactory} from '../ChessLogic/ChessLogic';
import {playAI} from '../ChessLogic/ChessAI'
import Grid from '../../components/Chess/Grid/Grid';
import classes from './chessBuilder.module.css';

export default class ChessBuilder extends Component {
    state = {
        pieces:[],
        moveTurn:'white',
        deadEleWhite:[],
        deadEleBlack:[]
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
        console.log(this.currEleIndex,"Ondrag Drop handler", index);

        if(this.state.moveTurn !== this.state.pieces[this.currEleIndex]['color']){
            alert("Not Your Piece");
            return;
        }
        
        if(checkMove(index, this.currEleIndex, this.state.pieces)){
            
            let newArray = [...this.state.pieces];
            
            var tempLastEle = newArray[index];
            if(tempLastEle.value !== ''){
                tempLastEle.isAlive = false;
            }

            newArray[index] = this.state.pieces[this.currEleIndex];
            newArray[index].numMoves++;
            newArray[this.currEleIndex] = {
                "value": "",
                "color": "none"
            }
            this.currEleIndex = null;

            if(newArray[index].color==="white"){
                this.setState({
                    pieces:newArray,
                    moveTurn:'black'
                    //deadEleWhite:[...this.state.deadEleWhite].push(tempLastEle)
                })
            }else{
                this.setState({
                    pieces:newArray,
                    moveTurn:'black'
                    //deadEleBlack:[...this.state.deadEleBlack].push(tempLastEle)
               })
            }
/****************AI CODE STARTS HERE *********************** */
            setTimeout(()=>{
                let newPieces = playAI(this.state.pieces);
                console.log(newPieces,"inside setTimout")
                this.setState({
                    pieces:newPieces,
                    moveTurn:'white'
                    //deadEleBlack:[...this.state.deadEleBlack].push(tempLastEle)
               })
            },500);
            

        }else{
            alert("Not Valid Move");
        }
        
    }

    componentDidMount(){
        console.log("inside component did mount");
        let tempArray = createFactory(gridData());
        this.setState({pieces:tempArray});
    }

    render() {

        //console.log("griddata", this.state.pieces);

        let mapValue = this.state.pieces.map((el,index)=>{
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
        for(let i=0;i<mapValue.length && i<16;i++){
           
            deadPiecesWhite.push(
               <li key={i}>
                    <Grid key = {i}
                        isDeadEle ={true}
                        gridvalue={this.state.pieces[i]['value']}  
                    />
                </li> 
            )
            // var tempArr=[];
            // for(let j=i;j<i+8;j++){
            //     tempArr.push(mapValue[j]);
            // }
            // i+=7;
            // gValue.push(<div className={classes.DivAlign} key={i}>{tempArr}</div>);
        } 

        //console.log(gValue,"gvalue")
        return (
            <div className={classes.Container} >
                <div className={classes.whiteDiv}>
                   <div className={classes.Title}>White Pieces</div>

                    <div className={classes.listContainer}>
                        <ul>
                            {deadPiecesWhite}
                        </ul>
                    </div>
                    
                </div>  
                <div className={classes.GridContainer}>{gValue}</div>
                <div className ={classes.BlackDiv}>
                    <div className={classes.Title}>Black dead pieces</div>

                </div>
            </div>
        )
    }
}
