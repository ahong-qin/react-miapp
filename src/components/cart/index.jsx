import React, {Component} from 'react';
import {connect} from "react-redux";

import Header from "./header/index";
import EmptyCart from "./emptyCart/index";
import CartList from "./cartList/index";
import Footer from "./footer/index";
import TabBar from "../tabBar/index";

@connect(
    state => ( {cart : state.cart} )
)
class Cart extends Component {
    render() {
        const {cart} = this.props;
        return (
            <div className="App-cart">
                <Header />
                {
                    Object.keys(cart.goods).length === 0 ? <EmptyCart /> : <CartList />
                }
                {
                    Object.keys(cart.goods).length === 0 ? <TabBar /> : <Footer />
                }
            </div>
        );
    }
}

export default Cart;