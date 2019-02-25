import React, {Component} from 'react';

import "./css/index.scss";

class Popular extends Component {
    render() {
        return (
            <div className="search-popular">
                <h5>热门搜索</h5>
                <div className="imgAd">
                    <img src={require("./img/redmi-note7.jpg")} alt="" width="100%" />
                </div>
                <div className="keys">
                    <ul>
                        <li>净水滤芯免费领</li>
                        <li>小米MIX 2S</li>
                        <li>防蓝光护目镜</li>
                        <li>小米平板4</li>
                        <li>小米8青春版</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Popular;