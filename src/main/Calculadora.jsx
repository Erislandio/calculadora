import React, { Component } from 'react';
import './Calculadora.css'
import Button from '../components/button/Button';
import Display from '../components/display/Display';

class Calculadora extends Component {


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
                <Display value="100"/>
                <Button label="AC"/>
                <Button label="/"/>
                <Button label="7"/>
                <Button label="8"/>
                <Button label="9"/>
                <Button label="*"/>
                <Button label="4"/>
                <Button label="5"/>
                <Button label="6"/>
                <Button label="-"/>
                <Button label="1"/>
                <Button label="2"/>
                <Button label="3"/>
                <Button label="+"/>
                <Button label="0"/>
                <Button label="."/>
                <Button label="="/>
            </div>
        );
    }
}

export default Calculadora;