import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonPanel from './components/ButtonPanel';
import Display from './components/Display';

class App extends Component {

  state={
    ele1:"",
    ele2:"",
    op:"",
    total:""
  }

  handleNumClick(i){
    let {ele1, ele2, op, total} = this.state;
    if(op){
      ele2 = ele2 + i;
    }else{
      ele1 = ele1 + i;
    }
    this.setState({ele1, ele2, op, total});
  }

  calculateTotal(ele1, op, ele2){

    let total = "";
    if(!ele1 || !ele2 || !op){
      return "";
    }
    switch(op){
      case "+":
        total = String(Number(ele1) + Number(ele2));
        break;
      case "-":
        total = String(ele1 - ele2);
        break;
      case "*":
        total = String(ele1 * ele2);
        break;
      case "/":
        total = String(ele1 / ele2);
        break;
      case "%":
        total = String(ele1 % ele2);
        break;
    }

    return total;


  }
  handleOperator(i){

    let {ele1, ele2, op, total} = this.state;
   
    if(!op){
      op = i;
    }else if(ele2){

      total = this.calculateTotal(ele1, op, ele2);
      ele1 = total;
      ele2 = total = "";
      op = i;
    }
    this.setState({ele1, ele2, op, total});
  }
  
  handleClick(i){

    let state = Object.assign({},this.state);
    let {ele1, ele2, op, total} = state;
    console.log(i);
    switch(i){
      case "AC" :
        this.setState({ele1:"",ele2:"",op:"",total:""});
        break;
      case "+/-":
        if(total){
          const numTotal = total * -1;
          total = String(numTotal);
        }else if(ele2){
          const numTotal = ele2 * -1;
          ele2 = String(numTotal);
        }else if(ele1){
          const numTotal = ele1 * -1;
          ele1 = String(numTotal);
        }
        this.setState({ele1, ele2, op, total});
        break;

      case "1":
        this.handleNumClick("1");
          break;
        case "2":
          this.handleNumClick("2");
          break;
        
        case "3":
          this.handleNumClick("3");
          break;
        case "4":
          this.handleNumClick("4");
          break;
        case "5":
          this.handleNumClick("5");
          break;
        case "6":
          this.handleNumClick("6");
          break;
        case "7":
          this.handleNumClick("7");
          break;
        case "8":
          this.handleNumClick("8");
          break;
        case "9":
          this.handleNumClick("9");
          break;
        case "0":
          this.handleNumClick("0");
          break; 
        case "+":
          this.handleOperator("+");
          break;
        case "-":
          this.handleOperator("-");
          break;
        case "x":
          this.handleOperator("*");
          break;
        case "/":
          this.handleOperator("/");
          break;
        case "%":
          this.handleOperator("%");
          break;
        case ".":
          if(total){
           total = total + ".";
          }else if(ele2){
            ele2 = ele2 + ".";
          }else if(ele1){
           ele1 = ele1 + ".";
          }
          this.setState({ele1, ele2, op, total});
          break;
        case "=":
          if(ele2){
            total = this.calculateTotal(ele1, op, ele2);
            ele1 = total;
            ele2 = op = total = ""; 
            this.setState({ele1, ele2, op, total});
            break;
          }
      default:
        alert("No Match");
    }

  }
  render() {

    let valueToPass = "0";
    if(this.state.total){
      valueToPass = this.state.total;
    }else if(this.state.ele2){
      valueToPass = this.state.ele2;
    }else if(this.state.ele1){
      valueToPass = this.state.ele1;
    }

    return (
      <div>
      <Display value={valueToPass}/>
      <ButtonPanel onClick={(i)=>this.handleClick(i)}/>
      </div>
    );
  }
}

export default App;
