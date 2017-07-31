import React, {Component} from 'react';
import calculatorImg from './calculator.png'

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            headerText: "My Calculator",
            operator: '',
            displayValue: "0",
            tempNum: 0,
            resetDisplay: false
        }
    }
    inputTextChanged(event) {
        //Remember the new value
        this.setState({
            headerText:event.target.value,

        }) 

    }

    numberClicked(num) {
        if  (this.state.resetDisplay === true) {
            this.setState({
                displayValue:num,
                resetDisplay:false 
            })
        } else {
            var displayValue = ( this.state.displayValue === '0') ? 
            num : this.state.displayValue + num
            this.setState({
                displayValue: (this.state.displayValue.length < 13) ? 
                displayValue : this.state.displayValue
            })
        }
    }

    setOperator(operator) {
        if (!this.state.operator) {
            this.setState({ 
                operator: operator, 
                tempNum: parseInt(this.state.displayValue, 10), 
                displayValue: '0', 
            })    
        }    
    }
    calculate() {
        if (this.state.operator === '') {
            return;
        }
        let result;
        switch ( this.state.operator ) {
            case '+':
                result = this.state.tempNum + parseInt(this.state.displayValue, 10);
                break;
            case '-':
                result = this.state.tempNum - parseInt(this.state.displayValue, 10);
                break;
            case '*':
                result = this.state.tempNum * parseInt(this.state.displayValue, 10);
                break;
            case '/':
                result = this.state.tempNum / parseInt(this.state.displayValue, 10);
                break;
            default:
                break;
        }
    this.setState({ 
        displayValue: String(result),
        resetDisplay: true,    
        operator: '', 
     });
    }

    clearDisplay() { 
        this.setState({
            displayValue:'0',
            tempNum: 0,
            operator: '',
            resetDisplay: false
        });
    }
    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={(e)=>this.inputTextChanged(e)}/>
                <h1 id="header"> {this.state.headerText} </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">{this.state.displayValue}</span>
                    </div>
                    <div className="btn clear" onClick={ ()=> this.clearDisplay() }></div>

                    <div className="btn zero"  onClick={ ()=> this.numberClicked('0') }></div>
                    <div className="btn one"   onClick={ ()=> this.numberClicked('1') }></div>
                    <div className="btn two"   onClick={ ()=> this.numberClicked('2') }></div>
                    <div className="btn three" onClick={ ()=> this.numberClicked('3') }></div>
                    <div className="btn four"  onClick={ ()=> this.numberClicked('4') }></div>
                    <div className="btn five"  onClick={ ()=> this.numberClicked('5') }></div>
                    <div className="btn six"   onClick={ ()=> this.numberClicked('6') }></div>
                    <div className="btn seven" onClick={ ()=> this.numberClicked('7') }></div>
                    <div className="btn eight" onClick={ ()=> this.numberClicked('8') }></div>
                    <div className="btn nine"  onClick={ ()=> this.numberClicked('9') }></div>

                    <div className="btn equal" onClick={ ()=> this.calculate()}></div>
                    <div className="btn multiply" onClick={ ()=> this.setOperator('*') }></div>
                    <div className="btn divide"   onClick={ ()=> this.setOperator('/') }></div>
                    <div className="btn subtract" onClick={ ()=> this.setOperator('-') }></div>
                    <div className="btn add"      onClick={ ()=> this.setOperator('+') }></div>
                </div>
            </div>
        )
    }
}

export default Calculator;