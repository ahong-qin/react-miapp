import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./css/index.scss";

class Operation extends Component {
    render() {
        return (
            <div className="operation">
                <div className="logo" />
                <div className="search">
                    <Link to="/search">
                        <i />
                        <span>搜索商品名称</span>
                    </Link>
                </div>
                <div className="login" />
            </div>
        );
    }
}

export default Operation;