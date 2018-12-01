import React, { Component } from 'react';
import './button.css'

class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <button className="button">
                    {this.props.label}
                </button>
            </React.Fragment>
        );
    }
}


export default Button;