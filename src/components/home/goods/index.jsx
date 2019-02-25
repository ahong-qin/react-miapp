import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";

import "./css/index.scss";

class Goods extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }

    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/goods")
            .then(response=>response.json())
            .then(data=>{
                if( data.status === 200 ){
                    this.setState({
                        data : data.data
                    })
                }
            });
    }

    render() {
        const {data} = this.state;

        return (
            <div className="home-goods">
                <div className="goods-spacing" />
                <div className="goods-cellPic">
                    <a href="/">
                        <img src={require("./img/dailySelect.webp")} alt="" width="100%" height="100%" />
                    </a>
                </div>
                <div className="goods-list">
                    <ul>
                        {
                            data.length > 0 && data.map(item => {
                                const {id, shopid, picurl, title, des, symbol, price, font} = item;
                                return (
                                    <LazyLoad key={id} offset={300} once>
                                        <li>
                                            <Link to={`/commodity/detail/${shopid}`}>
                                                <div className="item-pic">
                                                    <img src={picurl} alt="" width="100%" height="100%" />
                                                </div>
                                                <div className="item-info">
                                                    <p className="name ellipsis">{title}</p>
                                                    <p className="brief ellipsis">{des}</p>
                                                    <p className="price">{symbol}{price}{font}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    </LazyLoad>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Goods;