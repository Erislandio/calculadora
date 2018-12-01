import React, { Component } from 'react';
import './Calculadora.css'
import Button from '../components/button/Button';
import Display from '../components/display/Display';

class Calculadora extends Component {


    constructor(props) {
        super(props);

        this.clearMemory = this.clearMemory.bind(this)
        this.setOpetation = this.setOpetation.bind(this)
        this.addDigit = this.addDigit.bind(this)

    }


    clearMemory = () => {
        console.log('limpar')
    }

    setOpetation = (operation) => {
        console.log(operation)
    }

    addDigit = (n) => {
        console.log(n)
    }

    render() {

        const addDigit = n => this.addDigit(n)
        const setOpetation = op => this.setOpetation(op)


        return (
            <div className="calculator">
                <Display value="100" />
                <Button label="AC" click={() => this.clearMemory()} />
                <Button label="/" click={this.setOpetation} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOpetation} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOpetation} />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOpetation} />
                <Button label="0" click={this.addDigit} />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOpetation} />
            </div>
        );
    }
}

export default Calculadora;