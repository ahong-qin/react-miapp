import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import "./css/index.scss";
import {connect} from "react-redux";

@connect(
    state => ( {cart : state.cart} )
)
class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {
                    name : "tb-home",
                    exact : true,
                    to : "/",
                    content : "首页"
                },
                {
                    name : "tb-category",
                    to : "/category",
                    content : "分类"
                },
                {
                    name : "tb-cart",
                    to : "/cart",
                    content : "购物车"
                },
                {
                    name : "tb-user",
                    to : "/user",
                    content : "我的"
                }
            ]
        };
    }

    render() {
        const {totalNum} = this.props.cart;

        return (
            <footer className="App-tabBar">
                {
                    this.state.data.map((item, index) => {
                        const {name, content, ...config} = item;
                        return (
                            <div key={index} className={name}>
                                <NavLink {...config}>
                                    <i />
                                    <span>{content}</span>
                                    {
                                        name === "tb-cart" && (
                                            totalNum > 0 && (
                                                <sup className="badge">
                                                    {totalNum > 99 ? "99+" : totalNum}
                                                </sup>
                                            )
                                        )
                                    }
                                </NavLink>
                            </div>
                        );
                    })
                }
            </footer>
        );
    }
}

export default TabBar;