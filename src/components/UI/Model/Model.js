import React, { Component } from 'react';
import classes from './model.module.css'
import Aux from '../../../HOC/auxillary';
import Backdrop from '../Backdrop/Backdrop'

class Model extends Component {
    shouldComponentUpdate(nextProp,nextState){
        return nextProp.show !== this.props.show;
    }
    render(){
        //console.log(this.props.children)
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked = {this.props.modelClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity :this.props.show ? '1'  : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux> 
        )
    }
}

export default Model;