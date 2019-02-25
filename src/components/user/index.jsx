import React, {Component} from 'react';

import Header from "./header";
import MyOrder from "./myOrder";
import Operation from "./operation";
import Items from "./items";
import TabBar from "../tabBar";

// items 的图片
import member from "./img/member.png";
import wallet from "./img/wallet.png";
import service from "./img/service.png";
import mihome from "./img/mihome.png";
import fcode from "./img/fcode.png";
import setting from "./img/setting.png";

import "./css/index.scss";

class User extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            items: []
        };
    }

    getData = () => {
        const items = [
            [
                {
                    "icon" : member,
                    "word" : "会员中心"
                },
                {
                    "icon" : wallet,
                    "word" : "我的优惠"
                }
            ],
            [
                {
                    "icon" : service,
                    "word" : "服务中心"
                },
                {
                    "icon" : mihome,
                    "word" : "小米之家"
                }
            ],
            [
                {
                    "icon" : fcode,
                    "word" : "F码通道"
                }
            ],
            [
                {
                    "icon" : setting,
                    "word" : "设置"
                }
            ]
        ];
        this.setState({items})
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="App-user">
                <Header />
                <MyOrder />
                <Operation />
                {
                    this.state.items.length > 0 && (
                        this.state.items.map((item, index) => {
                            return (
                                <Items
                                    key={index}
                                    data={item}
                                />
                            );
                        })
                    )
                }
                <TabBar />
            </div>
        );
    }
}

export default User;