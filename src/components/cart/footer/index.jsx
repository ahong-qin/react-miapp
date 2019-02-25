import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./css/index.scss";

@connect(
    state => ( {cart : state.cart} )
)
class Footer extends Component {
    render() {
        const {cart} = this.props;
        const {totalBuyNum, totalPrice} = cart;

        return (
            <div className="cart-ft">
                <div className="total">
                    <span>共{totalBuyNum}件 金额：</span>
                    <br/>
                    <span className="price">{totalPrice}</span><span>元</span>
                </div>
                <div className="shopping">
                    <Link to="/category">继续购物</Link>
                </div>
                <div className="payment">去结算</div>
            </div>
        );
    }
}

export default Footer;