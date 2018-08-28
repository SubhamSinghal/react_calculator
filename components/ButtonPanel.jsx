import React from 'react';
import Button from './Button'

class ButtonPanel extends React.Component{

    handleClick(){
        alert("hello");

    }

    renderButton(i){
        return(
        <Button value={i} onClick={()=> this.props.onClick(i)} />
        );
    }
    render(){

        return(
        <div>
        <div>
        {this.renderButton("AC")}
        {this.renderButton("+/-")}
        {this.renderButton("%")}
        {this.renderButton("/")}
        </div>
        <div>
        {this.renderButton("7")}
        {this.renderButton("8")}
        {this.renderButton("9")}
        {this.renderButton("x")}
        </div>
        <div>
        {this.renderButton("4")}
        {this.renderButton("5")}
        {this.renderButton("6")}
        {this.renderButton("-")}
        </div>
        <div>
        {this.renderButton("1")}
        {this.renderButton("2")}
        {this.renderButton("3")}
        {this.renderButton("+")}
        </div>
        <div>
        {this.renderButton("0")}
        {this.renderButton(".")}
        {this.renderButton("=")}
        </div>
      </div>
    );
}
}

export default ButtonPanel;