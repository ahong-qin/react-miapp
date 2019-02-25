import React, {Component} from 'react';

import "./css/index.scss";

class Operation extends Component {
    render() {
        return (
            <ul className="user-operation">
                <li className="payment">
                    <div className="icon" />
                    <span>待付款</span>
                </li>
                <li className="receive">
                    <div className="icon" />
                    <span>待收货</span>
                </li>
                <li className="repair">
                    <div className="icon" />
                    <span>退换修</span>
                </li>
            </ul>
        );
    }
}

export default Operation;