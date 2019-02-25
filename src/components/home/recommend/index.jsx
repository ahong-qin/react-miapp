import React, {Component} from 'react';

import "./css/index.scss";

class Recommend extends Component {
    render() {
        return (
            <div className="home-recommend">
                <div className="spacing" />
                <div className="wrapper">
                    <div className="cell left">
                        <a href="/">
                            <img src={require("./img/redmi.webp")} alt="" width="100%" height="100%" />
                        </a>
                    </div>
                    <div className="cell right">
                        <a href="/" className="mar-b">
                            <img src={require("./img/intelligence-cell.webp")} alt="" width="100%" height="100%" />
                        </a>
                        <a href="/">
                            <img src={require("./img/mitv.webp")} alt="" width="100%" height="100%" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recommend;