import React, {Component} from 'react';

import "./css/index.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal : ""
        };
    }

    handleGoback = function(){
        window.history.back();
    };

    handleChangeSearchVal = e => {
        this.setState({
            searchVal : e.target.value
        })
    };

    render() {
        return (
            <header className="search-hd">
                <div className="back" onClick={this.handleGoback}>
                    <i />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder="搜索商品名称"
                        value={this.state.searchVal}
                        onChange={this.handleChangeSearchVal}
                    />
                </div>
                <div className="btn">
                    <i />
                </div>
            </header>
        );
    }
}

export default Header;