import React, {Component} from 'react';

import Operation from "./operation/index";
import ScrollList from "./scrollList/index";
import Layer from "./layer/index";

import "./css/index.scss";

class Header extends Component {
    state = {
        navItem : ["推荐", "年货节", "手机", "智能", "电视", "笔记本", "生活周边", "家电"],
        layer : false
    };

    handleToggleLayer = () => {
        this._hd.classList.toggle("showLayer");
        this.setState({
            layer : !this.state.layer
        })
    };

    render() {
        const {navItem, layer} = this.state;

        return (
            <header className="home-hd" ref={hd=>this._hd=hd}>
                <Operation />

                <div className="nav">
                    {
                        layer ? <Layer item={navItem} /> : <ScrollList item={navItem} />
                    }
                    <div
                        className={layer ? "arrow up" : "arrow"}
                        onClick={this.handleToggleLayer}
                    />
                </div>
            </header>
        );
    }
}

export default Header;