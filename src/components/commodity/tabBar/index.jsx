import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import "./css/index.scss";

@connect(
    state => ( {cart : state.cart} )
)
class TabBar extends Component {
    render() {
        const {cart, toggleLayer} = this.props;
        const {totalNum} = cart;

        return (
            <footer className="commodity-tabBar">
                <div className="wrapper">
                    <div className="tab">
                        <div className="home">
                            <Link to="/">
                                <i />
                                <span>首页</span>
                            </Link>
                        </div>
                        <div className="cart">
                            <Link to="/cart">
                                <i />
                                <span>购物车</span>
                                {
                                    totalNum > 0 && (
                                        <sup className="badge">
                                            {totalNum > 99 ? "99+" : totalNum}
                                        </sup>
                                    )
                                }
                            </Link>
                        </div>
                    </div>
                    <div
                        className="addCart"
                        onClick={toggleLayer.bind(this, 0)}
                    >加入购物车</div>
                </div>
            </footer>
        );
    }
}

export default TabBar;