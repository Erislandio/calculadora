import React, { Component } from 'react';
import './button.css'

class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    onClick={e => this.props.click && this.props.click(this.props.label)}
                    className={`
                    button
                    ${this.props.operation ? 'operation' : ''}
                    ${this.props.double ? 'double' : ''}
                    ${this.props.triple ? 'triple' : ''}
                    
                `}>
                    {this.props.label}
                </button>
            </React.Fragment>
        );
    }
}


export default Button;