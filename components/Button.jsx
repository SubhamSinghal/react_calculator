import React from 'react';

function Button(props){

    return(
        <button onClick={() => props.onClick()}> {props.value} </button>
        );
}
/*class Button extends React.Component{

    render(){

        return(
        <button onClick={() => this.props.onClick()}> {this.props.value} </button>
        );
    }
}*/

export default Button;