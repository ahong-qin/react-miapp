import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import "./css/index.scss";

class Not404 extends Component {
    render() {
        return (
            <div className="NotFound">
                <div className="container">
                    <div><img src={require("./img/404.jpg")} alt="页面不见了" /></div>
                    <p className="sorry">咦~页面不见了~</p>
                    <p className="backhome">
                        <NavLink to="/">返回首页</NavLink>
                    </p>
                </div>
            </div>
        );
    }
}

export default Not404;