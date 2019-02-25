import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./css/index.scss";

class EmptyCart extends Component {
    render() {
        return (
            <div className="cart-emptyCart">
                <div className="des">
                    <span>购物车还是空的</span>
                </div>
                <div className="tip">
                    <Link to="/">去逛逛</Link>
                </div>
            </div>
        );
    }
}

export default EmptyCart;