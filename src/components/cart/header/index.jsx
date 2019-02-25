import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./css/index.scss";

class Header extends Component {
    handleGoback = function(){
        window.history.back();
    };

    render() {
        return (
            <header className="cart-hd">
                <div className="wrapper">
                    <div className="back" onClick={this.handleGoback}>
                        <i />
                    </div>
                    <div className="title">购物车</div>
                    <div className="btn">
                        <Link to="/search">
                            <i />
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;