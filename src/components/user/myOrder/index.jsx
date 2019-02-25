import React, {Component} from 'react';

import "./css/index.scss";

class MyOrder extends Component {
    render() {
        return (
            <div className="user-myOrder">
                <div><span>我的订单</span></div>
                <div className="all"><span>全部订单</span></div>
            </div>
        );
    }
}

export default MyOrder;